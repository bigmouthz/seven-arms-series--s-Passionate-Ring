var debug = false;
var login;
var result;

var commit = false;

function CheckUnLeave() {
    if (commit == false) {
        return "请先提交试卷，再离开本页面！";
    }
};

common.maskcss();
var _exam = {};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function () { 
    $(window).scroll(function () {
        TopNum = $(this).scrollTop();
        if (TopNum > 0) {
            $('#topimg').show('slow').attr('title', '点此回到顶部');
            $('#topimg').css({ 'position': 'fixed', 'bottom': 120, 'left': ($(this).width() - $('div.main').width()) / 2 + $('div.main').width() });
        } else {
            $('#topimg').hide('slow');
        }
    });
    $('#topimg').click(function () {
        if (!Bigns) {
            $(this).attr('title', '再点此停止回到顶部');
            Bigns = true;
            GoTop();
        } else {
            $(this).attr('title', '点此回到顶部');
            Bigns = false;
            clearTimeout(GoTopTimeOut);
        }
    });
    login = $.cookie("exam-login");
    if (login == null || login == "undefine") {
        $.messager.alert("操作提示", "请重新登录！");
        window.location.href = '_login.htm';
        return;
    }
    login = JSON.parse(login);
    var QuestionLimitTime = "00:00:10";
    var QuestionByname = "";
    var QuestionTotalFullScore = 100;
    common.js("question/question" + login.Paper, function () {
        eval("data_Question = question" + login.Paper + ".Questions");
        eval("QuestionLimitTime = question" + login.Paper + ".LimitTime");
        eval("QuestionByname = question" + login.Paper + ".Byname");
        eval("QuestionTotalFullScore = question" + login.Paper + ".TotalFullScore");
        $("#login").html("试卷：" + QuestionByname + " 满分(" + QuestionTotalFullScore + ") - 部门:" + login.OrgName + " - 姓名:" + login.UserName + " - 开考时间：" + login.LoginTime);
        $('#timecounter').countdown({
            image: '/jeasyui/jquery.countdown.digits.png',
            startTime: QuestionLimitTime, //'00:00:10',
            timerEnd: function () { common.maskshow('mask'); alert("考试时间到!"); submit(); },
            format: 'hh:mm:ss'
        });
        result = { ExamPaper: login.Paper,
            Byname: QuestionByname,
            FullScore: QuestionTotalFullScore,
            LimitTime: QuestionLimitTime,
            UserCode: login.UserName,
            ClientIP: "192.168.0.1",
            LeftTime: login.LoginTime,
            RightTime: "",
            TotalScore: 0,
            Answers: []
        };

        _exam = new exam(data_Question, "#tt", window.screen.availWidth, window.screen.availHeight - 350);
        _exam.InitDataAnswer();
        _debugAnswer = false;
        if (debugAnswer) { console.log("InitDataAnswer:" + JSON.stringify(data_Answer)); }
        _exam.CreateDataGrid();
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function submit() {
    //console.log(commit);
    if (commit == true) return;
    common.js("answer/answer" + login.Paper, function () {
        var rightDataAnswer = [];
        eval("rightDataAnswer = answer" + login.Paper);
        var request = _exam.giveAmark(rightDataAnswer, data_Answer);
        $('#score').html("你的成绩为：" + request.TotalScore + "分！"); //+ "<br>" + JSON.stringify(request));
        $.ajax({
            type: "POST",
            url: '/api/Exam/SetExamAnswer',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(request),
            cache: false,
            async: true,
            success: function (data) {
                commit = true;
                $.messager.progress('close');
                if (debug) { console.log(data); }
                $('#answer').dialog('open');
                GoTop();
            },
            error: function (xhr, textStatus, errorThrown) {
                if (debug) { console.log(xhr.responseText); }
                $.messager.progress('close');
            }
        });

    });
};

var TopNum, Bigns = false;
var GoTopTimeOut;

function GoTop() {
    $(window).scrollTop(TopNum -= 100);
    GoTopTimeOut = setTimeout('GoTop()', 5);
    if (TopNum <= 0) {
        clearTimeout(GoTopTimeOut);
        Bigns = false;
    }
}
