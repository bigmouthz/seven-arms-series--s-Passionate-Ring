/*-------------------------------------------------------------------------------------
//生成试卷  用法： 
eval("data_Question = data_Question_20131128" );//试题赋值

// - or 

data_Question = [
{
    "Code": "0001",
    "QuestionType": "单选",
    "FullScore": "5",
    "QuestionContent": "0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述0001问题描述",
    "Items": [{ "ItemOrder": "A", "ItemAnswer": "可选答案A1" }, { "ItemOrder": "B", "ItemAnswer": "可选答案B1" }, { "ItemOrder": "C", "ItemAnswer": "可选答案C1" }, { "ItemOrder": "D", "ItemAnswer": "可选答案D1" }, { "ItemOrder": "E", "ItemAnswer": "可选答案E1", "IsWrite": "true"}],
    "Answers": [{ "ItemOrder": "E", "Value": "true", "ExpandValue": "EEEE"}]
},
{
    "Code": "0002",
    "QuestionType": "多选",
    "FullScore": "5",
    "QuestionContent": "0002问题描述",
    "Items": [{ "ItemOrder": "A", "ItemAnswer": "可选答案A2" }, { "ItemOrder": "B", "ItemAnswer": "可选答案B2" }, { "ItemOrder": "C", "ItemAnswer": "可选答案C2" }, { "ItemOrder": "D", "ItemAnswer": "可选答案D2" }, { "ItemOrder": "E", "ItemAnswer": "可选答案E2", "IsWrite": "true"}],
    "Answers": [{ "ItemOrder": "A", "Value": "true" }, { "ItemOrder": "D", "Value": "true" }, { "ItemOrder": "E", "Value": "true", "ExpandValue": "填写的内容E2"}]
}];

------------------------------------------------------------------------

<!--试题展示层-->
<table id="tt"></table>

var e = new exam(data_Question, "#tt", window.screen.availWidth, window.screen.availHeight - 350);

e.InitDataAnswer();
if (debugAnswer) { console.log("InitDataAnswer:" + JSON.stringify(data_Answer)); }


e.CreateDataGrid();

//得到考试选答结果
console.log(data_Answer);


----------------------------------------------------------------------------------------*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function exam(data_Question, datagridname, datagridwidth, datagridheight) {
    this.data_Question = data_Question;
    this.datagridname = datagridname;

    ///////////////////DataGrid/////////////////////////////////////////////////////////////////////////////////////////////
    this.CreateDataGrid = function () {

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var cc = [];

        for (var row in this.data_Question) {
            var rowData = this.data_Question[row];
            cc.push('<br/>');
            //问题内容
            cc.push('<span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;</span><b><p><font size="3">' + rowData.Code + '(' + rowData.QuestionType + ')</font>: <br/> <span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;</span><font size="3" color="blue">' + rowData.QuestionContent + '</font> (' + rowData.FullScore + ')分</p></b>')
            cc.push('<div style="float:left;margin-left:20px;">');
            for (var i = 0; i < rowData.Items.length; i++) {
                switch (rowData.QuestionType) {
                    case "单选":
                        var referAnswer = {};
                        if (rowData.Answers && rowData.Answers.length > 0) { referAnswer = rowData.Answers[0]; }

                        //生成控件
                        cc.push('<span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="radio" '
                         + (referAnswer.ItemOrder == rowData.Items[i].ItemOrder ? 'checked' : '')
                         + ' alt="' + rowData.Code + '" '
                         + ' title="' + rowData.Items[i].ItemOrder + '" '
                         + ' name="X_' + rowData.Code + '" '
                         + ' value="' + rowData.Items[i].ItemOrder + '" '
                         + ' onchange = "Onfire(\'radio\', this.alt, this.value, this.checked, \'\', this.title)"  />');
                        //控件描述内容
                        cc.push('<span >' + rowData.Items[i].ItemOrder + ':</span> ' + rowData.Items[i].ItemAnswer);
                        //是否可填写内容
                        if (rowData.Items[i].IsWrite == "true") {
                            cc.push('<input type="text" '
                             + ' alt="' + rowData.Code + '" '
                             + ' title="' + rowData.Items[i].ItemOrder + '" '
                             + ' id="XW_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                             + ' name="XW_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                             + ' value="' + (referAnswer.ItemOrder == rowData.Items[i].ItemOrder ? referAnswer.ExpandValue : '') + '" '
                             + ' onblur="Onfire(\'text\', this.alt, \'' + rowData.Items[i].ItemOrder + '\' ,\'\', this.value, this.title)" />');
                        }
                        cc.push('<br/>');
                        break;
                    case "多选":
                        var b = false;
                        if (rowData.Answers) {
                            for (var j = 0; j < rowData.Answers.length; j++) {
                                if (rowData.Answers[j].ItemOrder == rowData.Items[i].ItemOrder) {
                                    if (rowData.Answers[j].Value == "true" || rowData.Answers[j].Value == true) {
                                        b = true;
                                    }
                                    break;
                                }
                            }
                        }
                        //生成控件
                        cc.push('<span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="checkbox"  '
                         + (b == true ? 'checked ' : '')
                         + ' alt="' + rowData.Code + '" '
                         + ' title="' + rowData.Items[i].ItemOrder + '" '
                         + ' id="X_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                         + ' name="X_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                         + ' value="' + rowData.Items[i].ItemOrder + '" '
                         + ' onclick="Onfire(\'checkbox\', this.alt, this.value, this.checked, \'\', this.title)" />');
                        //控件描述内容
                        cc.push('<span >' + rowData.Items[i].ItemOrder + ':</span> ' + rowData.Items[i].ItemAnswer);
                        //是否可填写内容
                        if (rowData.Items[i].IsWrite == "true" || rowData.Items[i].IsWrite == true) {
                            var c = "";
                            if (rowData.Answers) {
                                for (var j = 0; j < rowData.Answers.length; j++) {
                                    if (rowData.Answers[j].ItemOrder == rowData.Items[i].ItemOrder) {
                                        c = rowData.Answers[j].ExpandValue;
                                        break;
                                    }
                                }
                            }
                            cc.push('<input type="text" '
                             + ' alt="' + rowData.Code + '" '
                             + ' title="' + rowData.Items[i].ItemOrder + '" '
                             + ' id="XW_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                             + ' name="XW_' + rowData.Code + '_' + rowData.Items[i].ItemOrder + '" '
                             + ' value="' + c + '" '
                             + ' onblur="Onfire(\'text\', this.alt, \'' + rowData.Items[i].ItemOrder + '\' ,\'\', this.value, this.title)" />');
                        }
                        cc.push('<br/>');
                        break;
                    default:
                        break;
                }
            }
            cc.push('<br/><div style="border-top:1px dashed #cccccc;height: 1px;overflow:hidden"></div><br/>');
            cc.push('</div>');
        }

        $(this.datagridname).html(cc.join(''));
        /////////////////////////////////////////////////////////////////////////
    };

    this.InitDataAnswer = function () {
        data_Answer = [];
        var a = 0;
        for (var i = 0; i < this.data_Question.length; i++) {
            if (data_Question[i].QuestionType == "单选") {
                data_Answer[a++] = { Code: this.data_Question[i].Code, Score: 0, Answers: this.data_Question[i].Answers };
            } else {
                data_Answer[a++] = { Code: this.data_Question[i].Code, Score: 0, Answers: this.data_Question[i].Answers };
            }
        }
        return data_Answer;
    }

    /////////////////////////////////////////////////////////////////////////
    this.giveAmark = function (Xright, answer) {
        var score = 0;
        var right = Xright.Questions;
        /////////////////////////////
        for (var i = 0; i < answer.length; i++) {
            for (var j = 0; j < right.length; j++) {
                if (right[j].Code == answer[i].Code) {
                    /////////////////////////////////////////////////////////////////
                    var tjam_r = [];
                    if (right[j].Answers) {
                        for (var tj in right[j].Answers) {
                            if (right[j].Answers[tj].Value == "true" || right[j].Answers[tj].Value == true) {
                                tjam_r.push(right[j].Answers[tj].ItemOrder);
                            }
                        }
                    }

                    var tjam_a = [];
                    if (answer[i].Answers) {
                        for (var tj in answer[i].Answers) {
                            if (answer[i].Answers[tj].Value == "true" || answer[i].Answers[tj].Value == true) {
                                tjam_a.push(answer[i].Answers[tj].ItemOrder);
                            }
                        }
                    }

                    if (tjam_a.length == tjam_r.length
                             && tjam_a.sort().toString() == tjam_r.sort().toString()) {

                        answer[i].Score = Number(right[j].FullScore);
                        score += Number(right[j].FullScore);
                    }


                    //console.log(i+ ":"+answer[i].Score);
                    /////////////////////////////////////////////////////////////////
                    break;
                }
            }
        }
        result.RightTime = new Date().Format("yyyy-MM-dd HH:mm:sss");
        result.TotalScore = score;
        result.Answers = answer;
        return result;
    };

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Onfire(controltype, code, item, value, expandvalue, owner) {
    //if (debug) { console.log("Onfire1:" + controltype + "|" + code + "|" + item + "|" + value + "|" + expandvalue + "|" + owner); }
    for (var i = 0; i < data_Question.length; i++) {
        if (data_Question[i].Code == code) {
            //if (debug) { console.log("Question:" + JSON.stringify(data_Question[i])); }

            ///////////////////////////////////
            if (data_Question[i].QuestionType == "单选") {
                if (controltype == "radio") {
                    expandvalue = $("#XW_" + code + "_" + item).attr("value");
                } else if (controltype == "text") {
                    var t = '[name="X_' + code + '"][value="' + owner + '"]';
                    value = $(t).attr('checked') == "checked";
                    //if (debug) { console.log(t + "#" + value); }
                    if (!value) {
                        //if (debugAnswer) { console.log("Onfire4:" + JSON.stringify(data_Answer)); }
                        return;
                    }
                }
            } else if (data_Question[i].QuestionType == "多选") {
                if (controltype == "checkbox") {
                    expandvalue = $("#XW_" + code + "_" + item).attr("value");
                } else if (controltype == "text") {

                    var t = "#X_" + code + "_" + item;
                    value = $(t).attr('checked') == "checked";
                    //if (debug) { console.log(t + "#" + value); }
                    expandvalue = $("#XW_" + code + "_" + item).attr("value");
                }
            }
            ///////////////////////////////////

            //if (debug) { console.log("Onfire2:" + controltype + "|" + code + "|" + item + "|" + value + "|" + expandvalue); }
            ChangeDataAnswer(controltype, data_Question[i].Code, data_Question[i].QuestionType, item, value, expandvalue);
            break;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function ChangeDataAnswer(controltype, code, type, item, value, expandvalue) {
        var b = false;
        for (var i = 0; i < data_Answer.length; i++) {
            if (data_Answer[i].Code == code) {
                if (type == "单选") {
                    data_Answer[i].Answers = [{ ItemOrder: item, Value: value, ExpandValue: expandvalue}];
                    b = true;
                    break;
                } else if (type == "多选") {
                    if (data_Answer[i].Answers) {
                        for (var j = 0; j < data_Answer[i].Answers.length; j++) {
                            if (data_Answer[i].Answers[j].ItemOrder == item) {
                                data_Answer[i].Answers[j] = { ItemOrder: item, Value: value, ExpandValue: expandvalue };
                                b = true;
                                break;
                            }
                        }
                    }
                    if (!b) {
                        if (data_Answer[i].Answers) {
                            var cnt = data_Answer[i].Answers.length;
                            data_Answer[i].Answers[cnt] = { ItemOrder: item, Value: value, ExpandValue: expandvalue };
                            b = true;
                            break;
                        } 
                    }
                }
                //if (debug) { console.log("Answer1:" + JSON.stringify(data_Answer[i])); }
              
            }
        }

        if (!b) {
            var cnt = data_Answer.length;
            data_Answer[cnt] = { Code: code, Score: 0, Answers: [{ ItemOrder: item, Value: value, ExpandValue: expandvalue}] };
            //if (debug) { console.log("Answer2:" + JSON.stringify(data_Answer[cnt])); }
        }

        //if (debugAnswer) { console.log("Onfire3:" + JSON.stringify(data_Answer)); }
    };
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var data_Answer = [];

var data_Question = [];

var debugAnswer = false;