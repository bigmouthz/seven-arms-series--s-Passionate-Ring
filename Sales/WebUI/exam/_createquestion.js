var debug = false;
function SetExamQuestion(ExamPaper) {
    common.js("QA/" + ExamPaper, function () {
        var request = {};
        eval("request = " + ExamPaper);
        $.ajax({
            type: "POST",
            url: '/api/Exam/SetExamQuestion',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(request),
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
    });
}