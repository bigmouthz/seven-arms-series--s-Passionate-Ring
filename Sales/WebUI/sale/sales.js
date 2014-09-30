var debug = false;
var debugtime = false;

function CheckRegister() {

    var tProjGuid = $('#cc').combogrid('getValue');
    var tCstName = $('#CstName').val();
    var tMobileTel = $('#MobileTel').val();

    if (debug) {
        console.log(tProjGuid + '|' + tCstName + '|' + tMobileTel);
    }

    var data = { "ProjGuid": tProjGuid,
        "CstName": tCstName,
        "MobileTel": tMobileTel
    };

    if (debug) { console.log(data); }

    $.ajax({
        type: "POST",
        url: '/api/Sales/IsExistsRegister',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        timeout: 1000,
        error: function (xhr, textStatus, errorThrown) {
            if (debug) { console.log(xhr.responseText); }
        },
        success: function (data) {
            $.messager.alert("操作提示", data.Message);
        }
    });
}

function submitForm() {
    var g = $('#cc').combogrid('grid');
    var r = g.datagrid('getSelected');

    var tProjGuid = r.ProjGuid;
    var tProjName = r.ProjName;
    var tBUGuid = r.BUGuid;
    var tCstName = $('#CstName').val();
    var tMobileTel = $('#MobileTel').val();
    var tGender = $('#Gender').combobox('getValue');
    var tTjrName = $('#TjrName').val();
    var tTjrMoblieTel = $('#TjrMoblieTel').val();
    var tTjrCarid = $('#TjrCarid').val();
    var tIsyz = 0;
    if ($("#Isyz").attr("checked") == "checked") tIsyz = 1;
    if (debug) {
        console.log('1:' + tProjGuid + '|' + tProjName + '|' + tBUGuid);
        console.log('2:' + tCstName + '|' + tMobileTel + '|' + tGender);
        console.log('3:' + tTjrName + '|' + tTjrMoblieTel + '|' + tTjrCarid + '|' + tIsyz);
    }

    $.messager.progress();

    var data = {
        "ProjGuid": tProjGuid,
        "ProjName": tProjName,
        "BUGuid": tBUGuid,
        "CstName": tCstName,
        "MobileTel": tMobileTel,
        "Gender": tGender,
        "TjrName": tTjrName,
        "TjrMoblieTel": tTjrMoblieTel,
        "TjrCarid": tTjrCarid,
        "Isyz": tIsyz
    };
    if (debug) {
        console.log(data);
    }
    $.ajax({
        type: "POST",
        url: '/api/Sales/CreateRegister',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        cache: false,
        async: true,
        success: function (data) {
            $.messager.progress('close');
            $.messager.alert("操作提示", data.Message);
            if (debug) { console.log(data); }
        },
        error: function (xhr, textStatus, errorThrown) {
            if (debug) { console.log(xhr.responseText); }
            $.messager.progress('close');
        }
    });
}

function clearForm() {
    $('#ff').form('clear');
}