var debug = false;
var debugtime = false;
var easyuiparse = false
var usercode="";
var project = "";

function onccSelect(record) {
    project = $('#cc').combobox('getValue');
    //【来源于ProjectNodeFiles,自身架构】
    //getData("/api/Cross/GetCrossProjectNodeFiles", { "Project": project, "Top": 5 }, 'crosstable2', 'dg2', easyuiparse);
    //【来源于KM知识库 OA转KM项目结点知识文档】
    getData("/api/Cross/GetCrossProjectNodeFilesKMExtend", { "Project": project, "Top": 5 , "UserCode": usercode}, 'crosstable2', 'dg2', easyuiparse);
}

function openProjectNodeFiles(nodeorder) {
    //window.location.href = '_index.htm';
    project = $('#cc').combobox('getValue');
    window.open("projectnodefiles.htm?project=" + project + "&nodeorder=" + nodeorder + "&uc=" + encodeURI(common.rc4(usercode, "bigmouthz@gmail.com")), '_blank');
}

function openNodeFiles(nodeorder) {
    //window.location.href = '_index.htm';
    window.open("nodefiles.htm?nodeorder=" + nodeorder + "&uc=" + encodeURI(common.rc4(usercode, "bigmouthz@gmail.com")), '_blank');
}

function getData(url, request, owner, parent, easyuiparse) {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        async: false,
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
            var html = template.render(owner, data);
            //alert("Begin");
            $("#" + parent).empty();
            //$("#" + parent).Html("");
            $(html).appendTo($("#" + parent));
            //if (easyuiparse) { $.parser.parse($('#' + parent)); }
            //alert("end");
        }
    });
}
$(function () {
    usercode = decodeURI(common.getUrlParam("uc"));
    usercode=common.rc4(usercode, "bigmouthz@gmail.com")

    try {
        if (usercode == null || usercode == "" || usercode == "undefined") { usercode = "jz"; }
         $('#cc').combobox({
            valueField: 'ProjectGuid',
            textField: 'ProjectName',
            url: '/api/Cross/GetCrossProject/' + usercode,
            panelWidth: 280,
            onSelect: onccSelect,
            onLoadSuccess: function () {
                var data = $('#cc').combobox('getData');
                //console.log("data");
                if (data[0] && data[0].ProjectGuid) {
                    project = data[0].ProjectGuid;
                }
                //$('#cc').combobox('setValue', project);
                $("#cc ").combobox('select', project);
            }
        });
    }
    catch (ex) {
        if (debug) { console.log(ex); }
    }

    template.helper("$sw", function sw(CValue) {
        if (common.isJson(CValue) == false) {
            CValue = $.parseJSON(CValue);
        }
        return CValue;
    });

    template.helper("$rp", function rp(CValue) {
        if (CValue && CValue.fileurl) {
            try {
                CValue.fileurl = CValue.fileurl.replace("{usercode}", usercode);
            } catch (ex) {
                if (debug) { console.log(ex); }
            }
        }
        return CValue;
    });

    getData("/api/Cross/GetCrossGuides", { "Top": 5 }, 'crosstable1', 'dg1', easyuiparse);
    //getData("/api/Cross/GetCrossProjectNodeKPIs", {}, 'crosstable3', 'dg3', true);

    // console.log($('*').length);
});