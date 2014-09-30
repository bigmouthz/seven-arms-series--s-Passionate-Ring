///////////////////DataGridQuery/////////////////////////////////////////////////////////////////////////////////////////////
var queryOperateString = [{ "lable": '包含于', "value": '1' }, { "lable": '不包含', "value": '2' }, { "lable": '大于等于', "value": '3' }, { "lable": '大于', "value": '4' }, { "lable": '等于', "value": 5 }, { "lable": '小于等于', "value": '6' }, { "lable": '小于', "value": '7' }, { "lable": '不等于', "value": '8'}];
var queryOperateNumber = [{ "lable": '大于等于', "value": '3' }, { "lable": '大于', "value": '4' }, { "lable": '等于', "value": 5 }, { "lable": '小于等于', "value": '6' }, { "lable": '小于', "value": '7' }, { "lable": '不等于', "value": '8' }, { "lable": '之间', "value": '9'}];
var queryOperateDate = [{ "lable": '大于等于', "value": '3' }, { "lable": '大于', "value": '4' }, { "lable": '等于', "value": 5 }, { "lable": '小于等于', "value": '6' }, { "lable": '小于', "value": '7' }, { "lable": '不等于', "value": '8' }, { "lable": '之间', "value": '9'}];
var queryOperateDatetime = [{ "lable": '大于等于', "value": '3' }, { "lable": '大于', "value": '4' }, { "lable": '等于', "value": 5 }, { "lable": '小于等于', "value": '6' }, { "lable": '小于', "value": '7' }, { "lable": '不等于', "value": '8' }, { "lable": '之间', "value": '9'}];
var queryOperateCombox = [{ "lable": '等于', "value": '5' }, { "lable": '不等于', "value": '8'}];
var queryOperateComtree = [{ "lable": '等于', "value": '5' }, { "lable": '不等于', "value": '8' }, { "lable": '存在于', "value": '10'}];


/*创建查询对象数据绑定
[{ field: "Guid", title: "内部码", type: "string" }}
*/
function createDgQueryFields(Data_QueryFields) {
    /*定义字段列表*/
    $("#dg_q_fields").combogrid({
        panelWidth: 300,
        idField: 'field',
        textField: 'title',
        columns: [[
                { field: 'field', title: '字段', width: 30, hidden: false },
                { field: 'title', title: '字段名', width: 60 },
                { field: 'type', title: '类型', width: 40, hidden: false }
            ]],
        fitColumns: true
    });

    /*绑定字段列表*/
    $('#dg_q_fields').combogrid('grid').datagrid({ singleSelect: true,
        data: Data_QueryFields,
        onSelect: function (rowIndex, rowData) {
            //$.messager.alert(rowIndex, rowData.field + "|" + rowData.title + "|" + rowData.type);
            changeDgQueryFields(rowData);
        }
    });

    /*绑定字段查询列表*/
    $("#dg_q_fields_operate").combobox({ valueField: 'value',
        textField: 'lable',
        data: queryOperateString,
        onLoadSuccess: function () {
                            var cdata = $('#dg_q_fields_operate').combobox('getData');
                            var c = cdata[0].value;
                            $("#dg_q_fields_operate ").combobox('select', c);
                        },
        onSelect: function (row) {
            //$.messager.alert(row.value, row.lable);
            var f = getSelectDgQueryField();
            switch (f.type) {
                case "datebox":
                    {
                        if (row.value == 9) {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').show(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        } else {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').show(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }
                        break;
                    }
                case "datetimebox":
                    {
                        if (row.value == 9) {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').show(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        } else {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').show(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }
                        break;
                    }
                case "numberbox":
                    {
                        if (row.value == 9) {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').show(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }  else {
                            $('#dg_q_fields_string').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').show(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }
                        break;
                    }
                case "string":
                    {
                        if (row.value == 1 || row.value == 2) {
                            $('#dg_q_fields_string').show(); //字符串查询
                            $('#dg_q_fields_string_content_left').show(); //字符串查询
                            $('#dg_q_fields_string_content_right').show(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }  else {
                            $('#dg_q_fields_string').show(); //字符串查询
                            $('#dg_q_fields_string_content_left').hide(); //字符串查询
                            $('#dg_q_fields_string_content_right').hide(); //字符串查询
                            $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                            $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                            $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                            $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                            $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                            $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                            $('#dg_q_fields_combobox').hide(); //Combobox查询
                            $('#dg_q_fields_combotree').hide(); //Combotree查询
                        }
                        break;
                    }
                case "combobox":
                    {
                        $('#dg_q_fields_string').hide(); //字符串查询
                        $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                        $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                        $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                        $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                        $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                        $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                        $('#dg_q_fields_combobox').show(); //Combobox查询
                        $('#dg_q_fields_combotree').hide(); //Combotree查询
                        break;
                    }
                case "combotree":
                    {
                        $('#dg_q_fields_string').hide(); //字符串查询
                        $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                        $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                        $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                        $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                        $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                        $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                        $('#dg_q_fields_combobox').hide(); //Combobox查询
                        $('#dg_q_fields_combotree').show(); //Combotree查询
                        break;
                    }
            }
        }
    });
}

/*行选择查询对象数据触发函数*/
function changeDgQueryFields(rowData) {
    var data;
    switch (rowData.type) {
        case "datebox":
            {
                data = queryOperateDate;
                $('#dg_q_fields_string').hide(); //字符串查询
                $('#dg_q_fields_datebox_content_single').show(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').hide(); //Combobox查询
                $('#dg_q_fields_combotree').hide(); //Combotree查询
                break;
            }
        case "datetimebox":
            {
                data = queryOperateDatetime;
                $('#dg_q_fields_string').hide(); //字符串查询
                $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').show(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').hide(); //Combobox查询
                $('#dg_q_fields_combotree').hide(); //Combotree查询
                break;
            }
        case "numberbox":
            {
                data = queryOperateNumber;
                $('#dg_q_fields_string').hide(); //字符串查询
                $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').show(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').hide(); //Combobox查询
                $('#dg_q_fields_combotree').hide(); //Combotree查询
                break;
            }
        case "combobox":
            {
                data = queryOperateCombox;
                if ($("#dg_q_fields_combobox_content").length != 0) {
                    $("#dg_q_fields_combobox_content").combobox({ valueField: 'Key',
                        textField: 'Value',
                        data: rowData.data,
                        onLoadSuccess: function () {
                            var cdata = $('#dg_q_fields_combobox_content').combobox('getData');
                            var c = cdata[0].Value;
                            $("#dg_q_fields_combobox_content ").combobox('select', c);
                        }
                    });
                } else {
                    $('#dg_q_fields_combobox_content').combobox('clear');
                    $('#dg_q_fields_combobox_content').combobox('loadData', rowData.data);
                }
                $('#dg_q_fields_string').hide(); //字符串查询
                $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').show(); //Combobox查询
                $('#dg_q_fields_combotree').hide(); //Combotree查询
                break;
            }
        case "combotree":
            {
                data = queryOperateComtree;
                if ($("#dg_q_fields_combotree_content").length != 0) {

                    $("#dg_q_fields_combotree_content").combotree({ multiple: false,
                        data: rowData.data
                    });
                } else {
                    $("#dg_q_fields_combotree_content").combotree("clear");
                    $('#dg_q_fields_combotree_content').combobox('loadData', rowData.data);
                }
                $('#dg_q_fields_string').hide(); //字符串查询
                $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').hide(); //Combobox查询
                $('#dg_q_fields_combotree').show(); //Combotree查询
                break;
            }
        case "string":
        default:
            {
                data = queryOperateString;
                $('#dg_q_fields_string').show(); //字符串查询
                $('#dg_q_fields_datebox_content_single').hide(); //日期查询（between）
                $('#dg_q_fields_datebox_content_between').hide(); //日期查询（非between）
                $('#dg_q_fields_datetimebox_content_single').hide(); //日期时间查询（between）
                $('#dg_q_fields_datetimebox_content_between').hide(); //日期时间查询（非between）
                $('#dg_q_fields_numberbox_content_single').hide(); //数字查询（between）
                $('#dg_q_fields_numberbox_content_between').hide(); //数字查询（非between）
                $('#dg_q_fields_combobox').hide(); //Combobox查询
                $('#dg_q_fields_combotree').hide(); //Combotree查询
                break;
            }
    }

    $('#dg_q_fields_operate').combobox('clear');
    $('#dg_q_fields_operate').combobox('loadData', data);
}

function getSelectDgQueryField() {
    var g = $('#dg_q_fields').combogrid('grid');
    var r = g.datagrid('getSelected');
    console.log(r);
    return r;
}

function getSelectDgFieldsOperate() {
    var r = $('#dg_q_fields').combobox('select');
    console.log(r);
    return r;
}
