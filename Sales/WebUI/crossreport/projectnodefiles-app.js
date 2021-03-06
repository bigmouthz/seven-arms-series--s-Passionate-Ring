﻿var debug = false;
var debugtime = false;


$(function () {
    CreateDataGrid("dg");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////DataGrid/////////////////////////////////////////////////////////////////////////////////////////////
function CreateDataGrid(datagridname) {
    var $dg = $("#" + datagridname);

    var usercode = common.getUrlParam("uc");
    var nodeorder = common.getUrlParam("nodeorder");
    var project = common.getUrlParam("project");

    usercode = decodeURI(common.rc4(usercode, "bigmouthz@gmail.com"));

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $dg.datagrid({
        width: 800, height: 600,
        showHeader: true,
        showFooter: true,
        columns:
        [
            [
                { field: 'Title', title: '标题', sortable: true, align: 'left', formatter: function (value, row, index) {
                    var d = '<a href="' + row.PostUrl.replace("{usercode}", usercode) + '" target="_blank">' + row.Title + '</a>';
                    return d;
                }
                }
            ]
    ],
        rownumbers: true,

        fitColumns: true,
        stripe: true,
        nowrap: true,

        singleSelect: true,
        checkOnSelect: true,
        selectOnCheck: true,

        method: "POST",
        url: "/api/Cross/GetProjectNodeFiles",
        loadMsg: "请等待... ...",
        loadFilter: function (data) {
            if (data.Rows) {
                 if (debug) { 
                console.log(data.Rows);
                 }
                return { "total": data.TotalRowCount, "rows": data.Rows };
            } else {
                return data;
            }
        },
        pagination: true,
        pagePosition: "both",
        pageList: [20, 30, 50, 100],
        pageNumber: 1,
        pageSize: 20,
        remoteSort: true,

        queryParams: { "IsPaging": true,
            "Params": [{ "Name": "usercode", "Type": "string", "Value": usercode },
            { "Name": "projectguid", "Type": "string", "Value": project },
            { "Name": "nodeorder", "Type": "string", "Value": nodeorder }
            ],
            "ParamPlus": "1=1", "ParamSort": [{ "Key": "ApprovedDate", "Value": "Desc " }, { "Key": "Title", "Value": "Asc"}]
        },
        toolbar: "#dg_tb",

        onDblClickRow: function (rowIndex, rowData) {
            $.messager.alert(rowIndex, JSON.stringify(rowData));
        }
    });

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
