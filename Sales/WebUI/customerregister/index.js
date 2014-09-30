var debug = false;
var debugtime = true;


$(function () {
    CreateDataGrid("dg");
    createColumnMenu(Data_MenuFields);
    createDgQueryFields(Data_QueryFields);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////