$(function () {
    var project = "70A4B3E5-D0A6-40BB-88F4-11651E2BFBBF";
    var top = 10;
    $('#cc').combobox('setValue', project);

    CreateCross("dg1", false, "/api/Cross/GetCrossGuides", {}, true);
    CreateCross("dg2", false, "/api/Cross/GetCrossProjectNodeFiles", { "Project": project, "Top": top }, true);
    CreateCross("dg3", false, "/api/Cross/GetCrossProjectNodeKPIs", {}, true);

    //console.log($("body").html());


});   