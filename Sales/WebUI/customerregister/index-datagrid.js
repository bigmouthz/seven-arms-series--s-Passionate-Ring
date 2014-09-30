///////////////////DataGrid/////////////////////////////////////////////////////////////////////////////////////////////
function CreateDataGrid(datagridname) {
    var $dg = $("#" + datagridname);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $dg.datagrid({
        //        width: 1024, height: 400,
        showHeader: true,
        showFooter: true,
        frozenColumns:
        [
            [{ title: '固定列', colspan: 5 }, ],
            [
                { field: 'ck', width: 80, checkbox: true },
                { field: 'Guid', title: '内部码', sortable: true, hidden: true, editor: "validatebox" },
                { field: 'Code', title: '序号', sortable: true, width: 40, align: 'center', editor: "validatebox" },
                { field: 'CustomerName', title: '客户姓名', sortable: true, width: 60, align: 'center', editor: "validatebox" },

                { field: 'action', title: 'Action', width: 70, align: 'center',
                    formatter: function (value, row, index) {
                        if (row.editing) {
                            var s = '<a href="#" onclick="saverow(' + index + ')">Save</a> ';
                            var c = '<a href="#" onclick="cancelrow(' + index + ')">Cancel</a>';
                            return s + c;
                        } else {
                            var e = '<a href="#" onclick="editrow(' + index + ')">Edit</a> ';
                            var d = '<a href="#" onclick="deleterow(' + index + ')">Delete</a>';
                            return e + d;
                        }
                    }
                }
            ],
        //                    [{ title: '固定列AA', colspan: 4 }, ]
        ],
        columns:
        [
            [{ title: '注册信息', colspan: 2 },
                { title: '注册属性', colspan: 9 },
                { title: '记录信息', colspan: 3 },
                { title: '问答', colspan: 2 }
            ],
            [
                { field: 'RegisterDate', title: '注册日期', sortable: true, align: 'right', editor: "datebox" },
                { field: 'MobileTel', title: '移动电话', sortable: true, align: 'right', editor: "validatebox" },

                { field: 'RentType', title: '租赁用途', sortable: true, align: 'right',

                    formatter: function (value) {
                        var ds = Data_RentType;
                        for (var i = 0; i < ds.length; i++) {
                            if (ds[i].Key == value) return ds[i].Value;
                        }
                        return ds[0].Value;
                    },
                    editor: {
                        type: 'combotree',
                        options: {
                            data: Data_RentType,
                            multiple: false,
                            required: true
                        }
                    }
                },
            { field: 'DemandArea', title: '需求面积', sortable: true, align: 'right',
                hfilter: { type: 'combobox', options: { data: Data_DemandArea, valueField: 'Key', textField: 'Value'} },
                formatter: function (value) {
                    var ds = Data_DemandArea;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_DemandArea,
                        required: true
                    }
                }
            },
            { field: 'FindWay', title: '客户获知途径', sortable: true, align: 'right',
                formatter: function (value) {
                    var ds = Data_FindWay;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_FindWay,
                        required: true
                    }
                }
            },
            { field: 'RentCause', title: '选择项目原因', sortable: true, align: 'right',
                formatter: function (value) {
                    var ds = Data_RentCause;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_RentCause,
                        required: true
                    }
                }
            },
            { field: 'AgeGroup', title: '客户年龄段', sortable: true, align: 'right',
                formatter: function (value) {
                    var ds = Data_AgeGroup;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_AgeGroup,
                        required: true
                    }
                }
            },
            { field: 'LivingCity', title: '居住区域', sortable: true, align: 'right',
                formatter: function (value) {
                    var ds = Data_LivingCity;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_LivingCity,
                        required: true
                    }
                }
            },
            { field: 'LeftCost', title: '期望租金_最少', sortable: true, align: 'right', editor: "slider",
                formatter: function (value, row, index) {
                    if (value < 20) {
                        return '<span style="color:red;">(' + value + ')</span>';
                    } else {
                        return value;
                    }
                }
            },
            { field: 'RightCost', title: '期望租金_最多', sortable: true, align: 'right',
                formatter: function (value, rowData, rowIndex) {
                    if (value && value != 0) {
                        return value + '%';
                    }
                    else {
                        return "";
                    }
                },
                editor: {
                    type: 'numberbox',
                    options: {
                        precision: 2,
                        min: 0,
                        max: 100
                    }
                }
            },
            { field: 'RegisterType', title: '来访方式', sortable: true, align: 'right',
                formatter: function (value) {
                    var ds = Data_RegisterType;
                    for (var i = 0; i < ds.length; i++) {
                        if (ds[i].Key == value) return ds[i].Value;
                    }
                    return ds[0].Value;
                },
                editor: {
                    type: 'combobox',
                    options: {
                        valueField: 'Key',
                        textField: 'Value',
                        data: Data_RegisterType,
                        required: true
                    }
                }
            },
            { field: 'Describe', title: '描述', sortable: true, width: 100, align: 'right', editor: "validatebox" },
            { field: 'RecordTime', title: '记录日期', sortable: true, align: 'right', editor: "datetimebox" },
            { field: 'Recorder', title: '记录人', sortable: true, align: 'right', editor: "validatebox" },
            { field: 'Question', title: '问题', width: 100, align: 'right', editor: "validatebox" },
            { field: 'Answer', title: '答复', width: 100, align: 'right', editor: "validatebox" }
            ]
    ],
        idField: 'Guid',
        rownumbers: true,

        fitColumns: false,
        stripe: true,
        nowrap: true,

        singleSelect: true,
        checkOnSelect: true,
        selectOnCheck: true,

        method: "POST",
        url: "/api/CustomerRegister/Gets",
        loadMsg: "请等待... ...",
        loadFilter: function (data) {
            if (data.Rows) {
                if (debug) { console.log(data.Rows); }
                return { "total": data.TotalRowCount, "rows": data.Rows };
            } else {
                return data;
            }
        },
        pagination: true,
        pagePosition: "bottom",
        pageList: [10, 20, 50, 100],
        pageNumber: 1,
        pageSize: 10,
        remoteSort: true,

        queryParams: { "IsPaging": true, "ParamSort": [{ "Key": "CustomerName", "Value": "Asc " }, { "Key": "RegisterDate", "Value": "Desc"}] },
        toolbar: "#dg_tb",

        onDblClickRow: function (rowIndex, rowData) {
            $.messager.alert(rowIndex, JSON.stringify(rowData));
        },
        onHeaderContextMenu: function (e, field) {
            e.preventDefault();
            if (!$('#dg_menu').length) {
                createColumnMenu(Data_MenuFields);
            }
            $('#dg_menu').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        }
    });



};

function createColumnMenu(Data_MenuFields) {
    var tmenu = $("#dg_menu");

    for (var i = 0; i < Data_MenuFields.length; i++) {
        $('<div iconCls="icon-ok"/>').html(Data_MenuFields[i].title).appendTo(tmenu);
    }
    tmenu.menu({
        onClick: function (item) {
            if (item.iconCls == 'icon-ok') {
                $('#dg').datagrid('hideColumn', dg_menu_find(Data_MenuFields, item.text));
                tmenu.menu('setIcon', {
                    target: item.target,
                    iconCls: 'icon-empty'
                });
            } else {
                $('#dg').datagrid('showColumn', dg_menu_find(Data_MenuFields, item.text));
                tmenu.menu('setIcon', {
                    target: item.target,
                    iconCls: 'icon-ok'
                });
            }
        }
    });

    function dg_menu_find(fields, title) {
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].title == title) { return fields[i].field; }
        }
        return title;
    }
}

function dgtoolbarsearch(value, name) {
    alert(value + "--" + name);
}

function dgadd(datagridname) {
    var $dg = $("#" + datagridname);
    $dg.datagrid('appendRow', {
        "Guid": UUID.createSequential(),
        "RegisterDate": new Date().Format("yyyy-MM-dd"),
        "RentType": Data_RentType[0].Key,
        "DemandArea": Data_DemandArea[0].Key,


        "FindWay": Data_FindWay[0].Key,
        "RentCause": Data_RentCause[0].Key,
        "AgeGroup": Data_AgeGroup[0].Key,
        "LivingCity": Data_LivingCity[0].Key,
        "RegisterType": Data_RegisterType[0].Key,

        "Recorder": "...",
        "RecordTime": new Date().Format("yyyy-MM-dd HH:mm:sss")
    });
    var rows = $dg.datagrid('getRows');
    $dg.datagrid('beginEdit', rows.length - 1);
};

function dgedit(datagridname) {
    var $dg = $("#" + datagridname);
    var row = $dg.datagrid('getSelected');
    if (row) {
        var rowIndex = $dg.datagrid('getRowIndex', row);
        $dg.datagrid('beginEdit', rowIndex);
    }
};

function dgremove(datagridname) {
    var $dg = $("#" + datagridname);
    var row = $dg.datagrid('getSelected');
    if (row) {
        var rowIndex = $dg.datagrid('getRowIndex', row);
        $dg.datagrid('deleteRow', rowIndex);
    }
};

function dgsave(datagridname) {
    var $dg = $("#" + datagridname);
    endEdit();
    if ($dg.datagrid('getChanges').length) {
        var inserted = $dg.datagrid('getChanges', "inserted");
        var deleted = $dg.datagrid('getChanges', "deleted");
        var updated = $dg.datagrid('getChanges', "updated");

        if (debug) {
            console.log("inserted:");
            console.log(inserted);
            console.log("deleted:");
            console.log(deleted);
            console.log("updated:");
            console.log(updated);
        }

        var request = new Object();
        if (inserted.length) {
            request.CreateEntities = [];
            for (var i in inserted) {
                var j = 0;
                request.CreateEntities[i] = {};
                request.CreateEntities[i].Params = [];
                request.CreateEntities[i].Params[j++] = { "Name": "@Guid", "Value": inserted[i].Guid, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@Code", "Value": inserted[i].Code, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@RegisterDate", "Value": inserted[i].RegisterDate, "Type": "datetime" };
                request.CreateEntities[i].Params[j++] = { "Name": "@CustomerName", "Value": inserted[i].CustomerName, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@MobileTel", "Value": inserted[i].MobileTel, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@RentType", "Value": inserted[i].RentType, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@DemandArea", "Value": inserted[i].DemandArea, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@FindWay", "Value": inserted[i].FindWay, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@RentCause", "Value": inserted[i].RentCause, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@AgeGroup", "Value": inserted[i].AgeGroup, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@LivingCity", "Value": inserted[i].LivingCity, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@LeftCost", "Value": inserted[i].LeftCost, "Type": "decimal" };
                request.CreateEntities[i].Params[j++] = { "Name": "@RightCost", "Value": inserted[i].RightCost, "Type": "decimal" };
                request.CreateEntities[i].Params[j++] = { "Name": "@RegisterType", "Value": inserted[i].RegisterType, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@Describe", "Value": inserted[i].Describe, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@Question", "Value": inserted[i].Question, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@Answer", "Value": inserted[i].Answer, "Type": "string" };
                request.CreateEntities[i].Params[j++] = { "Name": "@Recorder", "Value": inserted[i].Recorder, "Type": "string" };
            }
        }
        if (updated.length) {
            request.UpdateEntities = [];
            for (var i in updated) {
                var j = 0;
                request.UpdateEntities[i] = {};
                request.UpdateEntities[i].Params = [];
                request.UpdateEntities[i].Params[j++] = { "Name": "@Guid", "Value": updated[i].Guid, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@Code", "Value": updated[i].Code, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@RegisterDate", "Value": updated[i].RegisterDate, "Type": "datetime" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@CustomerName", "Value": updated[i].CustomerName, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@MobileTel", "Value": updated[i].MobileTel, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@RentType", "Value": updated[i].RentType, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@DemandArea", "Value": updated[i].DemandArea, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@FindWay", "Value": updated[i].FindWay, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@RentCause", "Value": updated[i].RentCause, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@AgeGroup", "Value": updated[i].AgeGroup, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@LivingCity", "Value": updated[i].LivingCity, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@LeftCost", "Value": updated[i].LeftCost, "Type": "decimal" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@RightCost", "Value": updated[i].RightCost, "Type": "decimal" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@RegisterType", "Value": updated[i].RegisterType, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@Describe", "Value": updated[i].Describe, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@Question", "Value": updated[i].Question, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@Answer", "Value": updated[i].Answer, "Type": "string" };
                request.UpdateEntities[i].Params[j++] = { "Name": "@Recorder", "Value": updated[i].Recorder, "Type": "string" };
            }
        }
        if (deleted.length) {
            request.RemoveEntities = deleted;
            request.RemoveEntities = [];
            for (var i in deleted) {
                var j = 0;
                request.RemoveEntities[i] = {};
                request.RemoveEntities[i].Params = [];
                request.RemoveEntities[i].Params[j++] = { "Name": "@Guid", "Value": deleted[i].Guid, "Type": "string" };
            }
        }

        if (debug) {
            console.log("request:");
            console.log(request);
        }

        $.ajax({
            type: "POST",
            url: "/api/CustomerRegister/Save",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(request),
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

                var b = true;
                var cnt = 0;
                for (var i in data) {
                    if (data[i].ResultValue == 0) {
                        cnt++;
                        b = false;
                    }
                }
                if (b == true)
                    $.messager.alert("提示", "提交成功！");
                else
                    $.messager.alert("提示", "提交错误了！错误次数：" + cnt);
            }
        });

    }
};

function endEdit(datagridname) {
    var $dg = $("#" + datagridname);
    var rows = $dg.datagrid('getRows');
    for (var i = 0; i < rows.length; i++) {
        $dg.datagrid('endEdit', i);
    }
};

function dgsearch(datagridname) {
    var $dg = $("#" + datagridname);
    alert("search");
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
