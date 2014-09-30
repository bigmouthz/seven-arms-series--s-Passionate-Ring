var debug = false;
var debugtime = false;

function onccSelect(record) {
    var project = $('#cc').combobox('getValue');
    var top = 10;
    getData("/api/Cross/GetCrossProjectNodeFiles", { "Project": project , "Top":top}, 'crosstable2', 'dg2', true);
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
            $("#" + parent).empty();
            //$("#" + parent).Html("");
            $(html).appendTo($("#" + parent));
            if (easyuiparse) { $.parser.parse($('#'+parent)); }
        }
    });
}

$(function () {
    var project = "123";
    var usercode = common.getUrlParam("usercode");
    try {
        if (usercode == null || usercode == "" || usercode == "undefined") { usercode = "ljw"; }
        $('#cc').combobox({
            valueField: 'ProjectGuid',
            textField: 'ProjectName',
            url: '/api/Cross/GetCrossProject/' + usercode,
            panelWidth: 280,
            onSelect: onccSelect,
            onLoadSuccess: function () {
                var data = $('#cc').combobox('getData');
                project = data[0].ProjectGuid;
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
            CValue.fileurl = CValue.fileurl.replace("{usercode}", usercode);
        }
        return CValue;
    });


    getData("/api/Cross/GetCrossGuides", {}, 'crosstable1', 'dg1', true);
    getData("/api/Cross/GetCrossProjectNodeKPIs", {}, 'crosstable3', 'dg3', true);

    console.log($('*').length);
});