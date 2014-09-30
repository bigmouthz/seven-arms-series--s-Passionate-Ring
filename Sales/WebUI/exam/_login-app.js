var debug = false;
var debugtime = false;
$(function () {
    var usercode = common.getUrlParam('id');
    if (usercode == null || usercode == "undefine") {
        return;
    }
    else {

        $('#UserName').val(usercode);
        $('#UserName').attr("disabled", true);

        var request = { UserCode: usercode };

        $.ajax({
            type: "POST",
            url: '/api/Exam/GetExamUsers',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(request),
            cache: false,
            async: true,
            success: function (data) {
                if (debug) { console.log(data); }

               // alert(JSON.stringify(data));

                $("#Paper").combobox('clear'); ;
                $("#Paper").combobox({ valueField: 'ExamPaper',
                    textField: 'ExamQuestionByname',
                    data: data,
                    onLoadSuccess: function () {
                        var cdata = $('#Paper').combobox('getData');
                        var c = cdata[0].ExamPaper;
                        $("#Paper ").combobox('select', c);
                    }
                });
            }
        });

    }
});



function IsExistExamAnswer() {

    var request = {
        UserCode: $('#UserName').val(),
        ExamPaper: $('#Paper').combobox('getValue')
    };

    $.ajax({
        type: "POST",
        url: '/api/Exam/IsExistsExamAnswer',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(request),
        cache: false,
        async: true,
        success: function (data) {
            if (debug) { console.log(data); }

            if (data && data != "undefine" && data.State == true) {
                $.messager.alert("操作提示", data.Message);
                return;
            }
            else {
                request = {
                    UserCode: $('#UserName').val(),
                    Email: $('#UserName').val(),
                    PWD: $('#UserPWD').attr('value')
                };

                $.ajax({
                    type: "POST",
                    url: '/api/Exam/GetUser',
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(request),
                    cache: false,
                    async: true,
                    success: function (data) {
                        if (debug) { console.log(data); }

                        if (data && data != "undefine" && data.State == true) {

                            var examlogin = {
                                "Paper": $('#Paper').combobox('getValue'),
                                "OrgName": $('#OrgName').val(),
                                "UserName": $('#UserName').val(),
                                "LoginTime": new Date().Format("yyyy-MM-dd HH:mm:sss")
                            };
                            if (debug) { console.log(examlogin); }
                            $.cookie("exam-login", JSON.stringify(examlogin));
                            var t = JSON.parse($.cookie("exam-login"));
                            if (debug) { console.log(t); }

                            $.messager.progress('close');
                            $.messager.alert("操作提示", "登录成功！");

                            window.location.href = '_index.htm';
                        } else {
                            $.messager.alert("操作提示", "登录失败！");
                        }
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        if (debug) { console.log(xhr.responseText); }
                        $.messager.progress('close');
                    }
                });
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            if (debug) { console.log(xhr.responseText); }
            $.messager.progress('close');
        }
    });
}

function submitForm() {
    IsExistExamAnswer();
}


function clearForm() {
    $('#ff').form('clear');
}