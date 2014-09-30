var debug = false;
var debugtime = false;
function CreateCross(tablename, true_data__false_url, obj, easyuiparse) {
    if (debugtime) { console.log("CreateCross:Begin" + new Date().toLocaleString()); }
    if (true_data__false_url) {
        CreateTable(tablename, obj.CRowTotal, obj.CColTotal);
        if (debugtime) { console.log("CreateContent Begin:" + new Date().toLocaleString()); }
        CreateContent(tablename, obj);
        if (debugtime) { console.log("CreateContent End:" + new Date().toLocaleString()); }
        if (easyuiparse) { $.parser.parse("#"+tablename); }
    } else {
    $.ajax({
        type: "POST",
        url: obj,
        dataType: "json",
        contentType: "application/json",
        timeout: 1000,
        error: function (xhr, textStatus, errorThrown) {
            if (debug) { console.log(xhr.responseText); }
        },
        success: function (data) {
            if (debug) {
                console.log(new Date().toLocaleString());
                console.log(data);
                console.log(JSON.stringify(data));
            }
            CreateTable(tablename, data.CRowTotal, data.CColTotal);
            if (debugtime) { console.log("CreateContent Begin:" + new Date().toLocaleString()); }
            CreateContent(tablename, data);
            if (debugtime) { console.log("CreateContent End:" + new Date().toLocaleString()); }
            if (easyuiparse) { $.parser.parse("#"+tablename); }
        }
    });
    }
    if (debugtime) { console.log("CreateCross:End" + new Date().toLocaleString()); }
}

function CreateTable(tablename, rowCount, cellCount) {
    var table = "<table id='dg' class='easyui-datagrid' > ";// cellpadding='1' cellspacing='1' border='1' 
    table += "<thead>";
    table += "<tr>";
    var i = 0;
    for (var j = 0; j < cellCount; j++) {
        if (debug) {
            table += "<th id='" + tablename + "_" + i + "_" + j + "' field='H" + i + "_" + j + "' width='120'>" + i + ":" + j + "</th>";
        } else {
            table += "<th id='" + tablename + "_" + i + "_" + j + "'  field='H" + i + "_" + j + "' width='120'></th>";
        }
    }
    table += "</tr>";
    table += "</thead>";
    table += "<tbody>";
    for (var i = 1; i < rowCount; i++) {
        var tr = "<tr>";
        for (var j = 0; j < cellCount; j++) {
            var td;
            if (debug) {
                td = "<td id='" + tablename + "_" + i + "_" + j + "'  >" + i + ":" + j + "</td>";
            } else {
                td = "<td id='" + tablename + "_" + i + "_" + j + "'  ></td>";
            }
            tr += td;
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</tbody>";
    table += "</table>";
    $(table).appendTo($("#" + tablename));
    if (debug) {
        console.log(table);        
        console.log($("#" + tablename).html());
    }
}

function CreateContent(tablename, data) {
    for (var row in data.Rows) {
        if (debug) { console.log(data.Rows[row]); }
        var cell = new CreateCell(tablename, data.Rows[row].CType, data.Rows[row].CRow, data.Rows[row].CCol, data.Rows[row].CValue);
        cell.getHtml();
    }
    if (debug) { console.log($("#" + tablename).html());   }
}

function isJson(obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

function CreateCell(tablename, type, row, col, value) {
    this.CType = type;
    this.CRow = row;
    this.CCol = col;
    this.CValue = value; //
    this.getHtml = function () {
        var cell = tablename + "_" + this.CRow + "_" + this.CCol;
        if (debug) { console.log("A:" + this.CValue); }
        if (isJson(this.CValue) == false) {
            //this.CValue = $.parseJSON("{" + value + "}");
            this.CValue = $.parseJSON(this.CValue);
        }
        if (debug) { console.log("B:" + this.CValue); }
        switch (type) {
            case "ProjectHead":
                if ($("#" + cell + type).length == 0) {
                    $("#" + cell).append("<div id=" + cell + type + " class=" + type + " ></div>");
                }
                $("#" + cell + type).append(getHtmlProjectHead(this.CValue));
                break;
            case "NodeHead":
                if ($("#" + cell + type).length == 0) {
                    $("#" + cell).append("<div id=" + cell + type + " class=" + type + " ></div>");
                }
                $("#" + cell + type).append(getHtmlNodeHead(this.CValue));
                break;
            case "NodeFiles":
                if ($("#" + cell + type).length == 0) {
                    $("#" + cell).append("<fieldset><legend>标准文件及模板</legend><div id=" + cell + type + " class=" + type + " ></div></fieldset>");
                }
                $("#" + cell + type).append(getHtmlNodeFiles(this.CValue));
                break;
            case "ProjectNodeValue":
                if ($("#" + cell + type).length == 0) {
                    $("#" + cell).append("<div id=" + cell + type + " class=" + type + " ></div>");
                }
                $("#" + cell + type).append(getHtmlProjectNodeValue(this.CValue));
                break;
            case "ProjectNodeFiles":
                if ($("#" + cell + type).length == 0) {
                    $("#" + cell).append("<fieldset><legend>上传文件</legend><div id=" + cell + type + " class=" + type + " ></div></fieldset>");
                }
                $("#" + cell + type).append(getHtmlProjectNodeFiles(this.CValue));
                break;
        }
    }
}

function getHtmlProjectHead(value) {
    var result = value.projecthead ?  value.projecthead  : "";
    if (debug) { console.log(result); }
    return result;
}

function getHtmlNodeHead(value) {
    var result = value.nodehead ? value.nodehead  : "";
    if (debug) { console.log(result); }
    return result;
}

function getHtmlNodeFiles(value) {

    var result;
    if (debug) {
        result = (value.fileguid ? "<p>" + value.fileguid + "</p>" : "")
    + (value.filename ? "<p>" + value.filename + "</p>" : "")
    + (value.filetype ? "<p>" + value.filetype + "</p>" : "")
    + (value.fileurl ? "<p>" + value.fileurl + "</p>" : "")
    + (value.uploadtime ? "<p>" + value.uploadtime + "</p>" : "");
    }

    result = "<a href=\"" + value.fileurl + "\" target=\"_blank\" >[" + value.filetype + "]" + value.filename + "</a><br>";
    if (debug) { console.log(result); }
    return result;
}

function getHtmlProjectNodeValue(value) {
    var result;
    result = (value.lefttime_plan ? "<fieldset><legend>计划进度</legend><p>开始日期：" + value.lefttime_plan + "</p>" : "")
    + (value.righttime_plan ? "<p>结束日期：" + value.righttime_plan + "</p>" : "")
    + (value.workdays_plan ? "<p>工作进度：<div class=\"easyui-progressbar\" style=\"width:80px;\" value=" + value.workdays_plan + "></div></p>" : "")
    + (value.alldays_plan ? "<p>时间进度：<div class=\"easyui-progressbar\" style=\"width:80px;\" value=" + value.alldays_plan + "></div></p></fieldset>" : "")

    + (value.lefttime_real ? "<fieldset><legend>实际进度</legend><p>开始日期：" + value.lefttime_real + "</p>" : "")
    + (value.righttime_real ? "<p>结束日期：" + value.righttime_real + "</p>" : "")
    + (value.workdays_real ? "<p>工作进度：<div class=\"easyui-progressbar\" style=\"width:80px;\" value=" + value.workdays_real + "></div></p>" : "")
    + (value.alldays_real ? "<p>时间进度：<div class=\"easyui-progressbar\" style=\"width:80px;\" value=" + value.alldays_real + "></div></p></fieldset>" : "")

    + (value.progress_completerate ? "<fieldset><legend>财务</legend><p>完成进度：<div class=\"easyui-progressbar\" style=\"width:80px;\" value=" + value.progress_completerate + "></div></p>" : "")
    + (value.cashflow_left ? "<p>现金流入：" + value.cashflow_left + "</p>" : "")
    + (value.cashflow_right ? "<p>现金流出：" + value.cashflow_right + "</p>" : "")
    + (value.cashflow ? "<p>现金流：" + value.cashflow + "</p>" : "")
    + (value.cost_plan ? "<p>成本计划：" + value.cost_plan + "</p>" : "")
    + (value.cost_real ? "<p>成本支出：" + value.cost_real + "</p></fieldset>" : "");
    if (debug) { console.log(result); }
    return result;
}

function getHtmlProjectNodeFiles(value) {
    var result = (value.fileguid ? "<p>" + value.fileguid + "</p>" : "")
    + (value.filename ? "<p>" + value.filename + "</p>" : "")
    + (value.filetype ? "<p>" + value.filetype + "</p>" : "")
    + (value.fileurl ? "<p>" + value.fileurl + "</p>" : "")
    + (value.uploadtime ? "<p>" + value.uploadtime + "</p>" : "");

    result = "<a href=\"" + value.fileurl + "\" target=\"_blank\" >[" + value.filetype + "]" + value.filename + "</a><br>";
    if (debug) { console.log(result); }
    return result;
}