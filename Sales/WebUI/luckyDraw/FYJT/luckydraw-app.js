var debug = false;

var timer;
var intervalTime = 5;

var sourcePool = [];
var tmpPool = [];

var showresultid;
var showresult;

var ListWin;
var cc;

var count = 1;
var cnt;
var curtmp = {};

var isFilter=false;
var luckydraw_sourcePool_bigNumber = [];
var filtermap = [
{ ID: "F0001", Name: "个位数" }, 
{ ID: "F0010", Name: "十位数" }, 
{ ID: "F0100", Name: "百位数" }, 
{ ID: "F1000", Name: "千位数" },

{ ID: "F0011", Name: "十个位数" },
{ ID: "F0101", Name: "百个位数" },
{ ID: "F0110", Name: "百十位数" },
{ ID: "F1001", Name: "千个位数" },
{ ID: "F1010", Name: "千十位数" },
{ ID: "F1100", Name: "千百位数" } 
 ];
var commit = false;
var curTotal = 0;

function CheckUnLeave() {
    if (commit == false) {
        return "你要离开本页面吗！";
    }
};

$(function () {

    //初始化数据池，因使用了html5特性，请使用chrome浏览器 
     sourcePool = InitSourcePool();
    //初始化抽奖奖项
    $("#cc").combobox({ valueField: 'value',
        textField: 'lable',
        data: ccData,
        onLoadSuccess: function () {
            var cdata = $('#cc').combobox('getData');
            var c = cdata[0].value;
            $("#cc ").combobox('select', c);
        },
        onSelect: onccSelect
    });
    showresultid = $("#showresultid");
    showresult = $("#showresult");
    ListWin = $("#ListWin");
    cnt = $("#cnt");
    $("#btnstop").hide();
});

//下拉列表设置到临时数据池专为下次抽奖使用
function onccSelect(record) {
    cc = $('#cc').combobox('getValue');
   isFilter = false;
    if (cc[0] == "X") {
        tmpPool = _.filter(sourcePool, function (item) { return item.XFlag == "0";  });
        isFilter = false;
    } else if (cc[0] == "Y") {
        tmpPool = _.filter(sourcePool, function (item) { return item.YFlag == "0";  });
        isFilter = false;
    } else if (cc == "F0001") {
        tmpPool = _.filter(bitPool, function (item) { return item.Flag_0001 == "0"; });
        isFilter = true;
  //      if (debug) { console.log("Init:bitPool_0001"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F0010") {
        tmpPool = _.filter(bitPool, function (item) { return item.Flag_0010 == "0"; });
        isFilter = true;
  //      if (debug) { console.log("Init:bitPool_0010"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F0100") {
        tmpPool = _.filter(bitPool, function (item) { return item.Flag_0100 == "0"; });
        isFilter = true;
  //      if (debug) { console.log("Init:bitPool_0100"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F1000") {
        tmpPool = _.filter(bitPool, function (item) { return item.Flag_1000 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:bitPool_1000"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F0011") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0011 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_0011"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F0101") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0101 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_0101"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F0110") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0110 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_0110"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F1001") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1001 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_1001"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F1010") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1010 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_1010"); console.log(tmpPool.length); console.log(tmpPool); }
    } else if (cc == "F1100") {
        tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1100 == "0"; }); ;
        isFilter = true;
  //      if (debug) { console.log("Init:doublebitPool_1100"); console.log(tmpPool.length); console.log(tmpPool); }
    } else {
        tmpPool = _.filter(sourcePool, function (item) { return item.Flag == "0";   });
        isFilter = false;
  //      if (debug) { console.log("Init:tmpPool"); console.log(tmpPool.length); console.log(tmpPool); }
    }
};

//初始化进入页面时的抽奖原始名单
function InitSourcePool() {
    var result = [];
    if ('localStorage' in window && window['localStorage'] !== null) {
        //window.addEventListener('storage', function (e) { if (debug) { console.log(e.key + "'s value is changed from '" + e.oldValue + "' to '" + e.newValue + "' by " + e.url); } }, false);
        if (localStorage.length == 0) {
            if (IsAutoBigNumber == true) {
                for (var i = 1; i <= MaxbigNumber; i++) {
                    luckydraw_sourcePool_bigNumber.push({ ID: i, Name: common.padLeft(i.toString(), 4), Flag: "0", XFlag: "0", YFlag: "0" });
                }
                localStorage['sourcePool'] = JSON.stringify(luckydraw_sourcePool_bigNumber);
                localStorage['bitPool'] = JSON.stringify(bitPool);
                localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
            }
            else {
                localStorage['sourcePool'] = JSON.stringify(luckydraw_sourcePool);
                localStorage['bitPool'] = JSON.stringify(bitPool);
                localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
            }
        }
        bitPool = JSON.parse(localStorage['bitPool']);
        doublebitPool =  JSON.parse(localStorage['doublebitPool']);
        result = JSON.parse(localStorage['sourcePool']); //eval("(" + sourcePool + ")");
    } else {
        Alert("请使用支持HTML5的浏览器！");
    }
    return result;
};

//随机抽奖及界面显示
function change() {
    if (tmpPool.length > 0) {
        var i = Math.ceil(_.random(0, tmpPool.length - 1));
        showresult.html("<font style='font-size:2.5em;line-height:70px;color:white;font-family:SimHei;'>" + tmpPool[i].Name + "</font>");
        showresultid.val(tmpPool[i].ID);
        curtmp = tmpPool[i];
    } else {
        showresult.html("<font style='font-size:2.5em;line-height:70px;color:white;font-family:SimHei;'></font>");
        showresultid.val("");
        curtmp = "";
    }
};

//清除缓存
function cacheclear() {
    if ($("#pwd").val() == "8888") {
        localStorage.clear();
        alert("OK");
        sourcePool = InitSourcePool();
        onccSelect();
    } else {
    alert("密码不对，不能清缓存！");
    }
}

//开始抽奖
function start() {
    showresult.show();
    ListWin.empty();
    clearInterval(timer);
    timer = setInterval('change()', intervalTime);
    $('#btnstart').hide();
    $('#btnstop').show();
};

//滚动停止
function ok() {
    clearInterval(timer);
    showresult.hide();
    count = parseInt(cnt.val());
    //---------------------抽奖Begin
    if (tmpPool.length > 0) {
        tmpPool = getnexttmppool(curtmp, cc, tmpPool);
        var rs = [];
        var i = 0;
        rs.push(curtmp);
        //未避免误操作过滤掉太多的数位，帮一次仅只允许过滤掉一位
        if (isFilter == true) { count = 1; }
        for (var j = 1; j < count; j++) {
            common.sleep(function () { i++; /*console.log(i);*/ }, 10);
            i = Math.ceil(_.random(0, tmpPool.length - 1));

            try {
                curtmp = tmpPool[i];
                rs.push(curtmp);
                tmpPool = getnexttmppool(curtmp, cc, tmpPool);
            } catch (ex) {
                //if (debug) { console.log(ex); }
            }
        }
        localStorage['sourcePool'] = JSON.stringify(sourcePool);

        if (isFilter == true) { viewF(rs); } else { viewOXY(rs); }
    } else {
        ListWin.empty();
        if (isFilter == true) { ListWin.html("过滤完成！"); } else { ListWin.html("抽奖完成！"); }
    }
    //---------------------抽奖End
    $('#btnstart').show();
    $('#btnstop').hide();
};

//得到下一轮抽奖池
function getnexttmppool(result, cc, tmpPool) {
    if (result == "") return tmpPool;
    if (isFilter == true) {
        /*取下次过滤名单---Begin*/
        switch (cc) {
            case "F0001":
                {
                    for (var i = 0; i < bitPool.length; i++) {
                        if (bitPool[i].ID == result.ID) {
                            bitPool[i].Flag_0001 = cc;
                            tmpPool = _.filter(bitPool, function (item) { return item.Flag_0001 == "0"; });
                            localStorage['bitPool'] = JSON.stringify(bitPool);

                            for (var j = 0; j < doublebitPool.length; j++) {
                                if (filter_doublefilterbitPool(result.ID, doublebitPool[j].ID)) {
                                    doublebitPool[j].Flag_0011 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0101 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0110 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1001 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1010 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1100 = "Relation" + result.ID;
                                }
                            }
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                } 
                case "F0010":
                {
                    for (var i = 0; i < bitPool.length; i++) {
                        if (bitPool[i].ID == result.ID) {
                            bitPool[i].Flag_0010 = cc;
                            tmpPool = _.filter(bitPool, function (item) { return item.Flag_0010 == "0"; });
                            localStorage['bitPool'] = JSON.stringify(bitPool);
                            for (var j = 0; j < doublebitPool.length; j++) {
                                if (filter_doublefilterbitPool(result.ID, doublebitPool[j].ID)) {
                                    doublebitPool[j].Flag_0011 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0101 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0110 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1001 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1010 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1100 = "Relation" + result.ID;
                                }
                            }
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F0100":
                {
                    for (var i = 0; i < bitPool.length; i++) {
                        if (bitPool[i].ID == result.ID) {
                            bitPool[i].Flag_0100 = cc;
                            tmpPool = _.filter(bitPool, function (item) { return item.Flag_0100 == "0"; });
                            localStorage['bitPool'] = JSON.stringify(bitPool);
                            for (var j = 0; j < doublebitPool.length; j++) {
                                if (filter_doublefilterbitPool(result.ID, doublebitPool[j].ID)) {
                                    doublebitPool[j].Flag_0011 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0101 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0110 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1001 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1010 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1100 = "Relation" + result.ID;
                                }
                            }
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F1000":
                {
                    for (var i = 0; i < bitPool.length; i++) {
                        if (bitPool[i].ID == result.ID) {
                            bitPool[i].Flag_1000 = cc;
                            tmpPool = _.filter(bitPool, function (item) { return item.Flag_1000 == "0"; });
                            localStorage['bitPool'] = JSON.stringify(bitPool);
                            for (var j = 0; j < doublebitPool.length; j++) {
                                if (filter_doublefilterbitPool(result.ID, doublebitPool[j].ID)) {
                                    doublebitPool[j].Flag_0011 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0101 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_0110 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1001 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1010 = "Relation" + result.ID;
                                    doublebitPool[j].Flag_1100 = "Relation" + result.ID;
                                }
                            }
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                } 
                case "F0011":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_0011 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0011 == "0"; });
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F0101":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_0101 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0101 == "0"; });
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F0110":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_0110 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_0110 == "0"; });
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F1001":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_1001 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1001 == "0"; });
                            localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F1010":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_1010 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1010 == "0"; });
                             localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            case "F1100":
                {
                    for (var i = 0; i < doublebitPool.length; i++) {
                        if (doublebitPool[i].ID == result.ID) {
                            doublebitPool[i].Flag_1100 = cc;
                            tmpPool = _.filter(doublebitPool, function (item) { return item.Flag_1100 == "0"; });
                             localStorage['doublebitPool'] = JSON.stringify(doublebitPool);
                            break;
                        }
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }

        curTotal = 0;
        for (var i = 0; i < sourcePool.length; i++) {
            if (filterSourcePool(sourcePool[i].ID, result.ID, cc)) {
                if (sourcePool[i].Flag == "0") { sourcePool[i].Flag = "-1"; }
                if (sourcePool[i].XFlag == "0") { sourcePool[i].XFlag = "-1"; }
                if (sourcePool[i].YFlag == "0") { sourcePool[i].YFlag = "-1"; }
                curTotal++;
            } else if (doublefilterSourcePool(sourcePool[i].ID, result.ID, cc)) {
                if (sourcePool[i].Flag == "0") { sourcePool[i].Flag = "-1"; }
                if (sourcePool[i].XFlag == "0") { sourcePool[i].XFlag = "-1"; }
                if (sourcePool[i].YFlag == "0") { sourcePool[i].YFlag = "-1"; }
                curTotal++;
            }
        }
        if (debug) { console.log("sourcePool"); console.log(sourcePool.length); console.log(sourcePool); }
        //localStorage['sourcePool'] = JSON.stringify(sourcePool);
        /*取下次过滤名单---End*/
    } else {
    /*取下次抽奖名单---Begin*/
        for (var i = 0; i < sourcePool.length; i++) {            
            if (sourcePool[i].ID == result.ID) {
                if (cc[0] == "X") {
                    sourcePool[i].XFlag = cc;
                    tmpPool = _.filter(sourcePool, function (item) { return item.XFlag == "0"; });
                } else if (cc[0] == "Y") {
                    sourcePool[i].YFlag = cc;
                    tmpPool = _.filter(sourcePool, function (item) { return item.YFlag == "0"; });
                } else {
                    sourcePool[i].Flag = cc;
                    tmpPool = _.filter(sourcePool, function (item) { return item.Flag == "0"; });
                }
                break;
            }
        }
        /*取下次抽奖名单---End*/
    }
	return tmpPool;
};

//显示所有抽奖情况｛特殊约定 传入0清屏，传入-1显示所有抽奖结果，传入其它显示当前奖项的抽奖结果｝
function view(cc) {
    ListWin.empty();
    var rs = [];
    var ci = 0;
    if (cc == "0") {
        //什么事也不做
    } else if (cc == "-1") {
        for (var i = 0; i < sourcePool.length; i++) {
            if ((sourcePool[i].Flag != "0" && sourcePool[i].Flag != "-1") || (sourcePool[i].XFlag != "0" && sourcePool[i].XFlag != "-1")) {
                ci++;
                rs.push("<font size='2'>" + "[" + ci + "] | Flag:" + sourcePool[i].Flag + " | XFlag:" + sourcePool[i].XFlag + " | YFlag:" + sourcePool[i].YFlag + " | ID:" + sourcePool[i].ID + " | Name:" + sourcePool[i].Name + "</font>");
            }
        }

        for (var i = 0; i < bitPool.length; i++) {
            if ((bitPool[i].Flag_0001 != "0" && bitPool[i].Flag_0001 != "-1")
            || (bitPool[i].Flag_0010 != "0" && bitPool[i].Flag_0010 != "-1")
            || (bitPool[i].Flag_0100 != "0" && bitPool[i].Flag_0100 != "-1")
            || (bitPool[i].Flag_1000 != "0" && bitPool[i].Flag_1000 != "-1")) {
                ci++;
                rs.push("<font size='2'>" + "[" + ci + "] | Flag_0001:" + bitPool[i].Flag_0001
                + " | Flag_0010:" + bitPool[i].Flag_0010
                + " | Flag_0100:" + bitPool[i].Flag_0100
                + " | Flag_1000:" + bitPool[i].Flag_1000
                + " | ID:" + bitPool[i].ID + " | Name:" + bitPool[i].Name + "</font>");
            }
        }

        for (var i = 0; i < doublebitPool.length; i++) {
            if ((doublebitPool[i].Flag_0011 != "0" && doublebitPool[i].Flag_0011 != "-1")
            || (doublebitPool[i].Flag_0101 != "0" && doublebitPool[i].Flag_0101 != "-1")
            || (doublebitPool[i].Flag_0110 != "0" && doublebitPool[i].Flag_0110 != "-1")
            || (doublebitPool[i].Flag_1001 != "0" && doublebitPool[i].Flag_1001 != "-1")
            || (doublebitPool[i].Flag_1010 != "0" && doublebitPool[i].Flag_1010 != "-1")
            || (doublebitPool[i].Flag_1100 != "0" && doublebitPool[i].Flag_1100 != "-1")) {
                ci++;
                rs.push("<font size='2'>" + "[" + ci + "] "
                + " | Flag_0011:" + doublebitPool[i].Flag_0011
                + " | Flag_0101:" + doublebitPool[i].Flag_0101
                + " | Flag_0110:" + doublebitPool[i].Flag_0110
                + " | Flag_1001:" + doublebitPool[i].Flag_1001
                + " | Flag_1010:" + doublebitPool[i].Flag_1010
                + " | Flag_1100:" + doublebitPool[i].Flag_1100
                + " | ID:" + doublebitPool[i].ID + " | Name:" + doublebitPool[i].Name + "</font>");
            }
        }
    }
    /*
    else {
    for (var i = 0; i < sourcePool.length; i++) {
    if (sourcePool[i].Flag == cc || sourcePool[i].XFlag != cc) {
    ci++;
    rs.push("<font size='2'>" + "[" + ci + "] | Flag:" + sourcePool[i].Flag + " | XFlag:" + sourcePool[i].XFlag + " | YFlag:" + sourcePool[i].YFlag + " | ID:" + sourcePool[i].ID + " | Name:" + sourcePool[i].Name + "</font>");
    }
    }
    }
    */
    if (debug) { console.log("rs"); console.log(rs.length); console.log(rs); }
    ListWin.html(rs.join("<br>"));
    onccSelect();
};

/*
双缓冲池过滤
*/
function filter_doublefilterbitPool(singlebit, doublebit) {
    var tmpdoublebit = common.padLeft(String(doublebit), 2);
    var tmpdoublebitArray = tmpdoublebit.split("");
    var tmpsinglebit = String(singlebit);
    if (tmpdoublebit.length >= 2 && tmpdoublebitArray[1] == tmpsinglebit)
        return true;
    return false;
};

/*
单个过滤判断
*/
function filterSourcePool(sourceID, result, cc) {
    var tmpSourceID = common.padLeft(String(sourceID), 6);
    var tmpSourceArray = tmpSourceID.split("");
    var tmpResult = String(result);
    /*
    十 万 千 百 十 个
    0  1  2  3  4  5
    */
    if (cc == "F0001") {//个位过滤判别
        if (tmpSourceArray.length >= 1 && tmpSourceArray[5] == tmpResult)
            return true;
    } else if (cc == "F0010") {//十位过滤判别
        if (tmpSourceArray.length >= 2 && tmpSourceArray[4] == tmpResult)
            return true;
    } else if (cc == "F0100") {//百位过滤判别
        if (tmpSourceArray.length >= 3 && tmpSourceArray[3] == tmpResult)
            return true;
    } else if (cc == "F1000") {//千位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[2] == tmpResult)
            return true;
    }    
    return false;
};

/*
双个过滤判断
*/
function doublefilterSourcePool(sourceID, result, cc) {
    var tmpSourceID = common.padLeft(String(sourceID), 6);
    var tmpSourceArray = tmpSourceID.split("");
    var tmpResult = common.padLeft(String(result),2);
    var tmpResultArray = tmpResult.split("");
     /*
    十 万 千 百 十 个
    0  1  2  3  4  5
    */
    if (cc == "F0011") {//十个位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[4] == tmpResult[0] && tmpSourceArray[5] == tmpResult[1])
            return true;
    } else if (cc == "F0101") {//百个位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[3] == tmpResult[0] && tmpSourceArray[5] == tmpResult[1])
            return true;
    } else if (cc == "F0110") {//百十位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[3] == tmpResult[0] && tmpSourceArray[4] == tmpResult[1])
            return true;
    } else if (cc == "F1001") {//千个位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[2] == tmpResult[0] && tmpSourceArray[5] == tmpResult[1])
            return true;
    } else if (cc == "F1010") {//千十位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[2] == tmpResult[0] && tmpSourceArray[4] == tmpResult[1])
            return true;
    } else if (cc == "F1100") {//千百位过滤判别
        if (tmpSourceArray.length >= 4 && tmpSourceArray[2] == tmpResult[0] && tmpSourceArray[3] == tmpResult[1])
            return true;
    }
    return false;
};

//过滤界面 过滤显示
function viewF(rsx) {
    var tmp = {};
    ListWin.empty();
    var rs = [];
    for (var x = 0; x < rsx.length; x++) {
        if (cc == "F0001" || cc == "F0010" || cc == "F0100" || cc == "F1000" 
        || cc == "F0011" || cc == "F0110" || cc == "F1001" || cc == "F1010" || cc == "F1100" || cc == "F0101") {
         tmp = rsx[x]; 
         rs.push("<font style='font-size:6.5em;line-height:70px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
         rs.push("<br>");
        }
    }
    ListWin.html(rs.join(""));
    onccSelect();
}

//中奖界面  名单显示
function viewOXY(rsx) {
    var tmp = {};
    ListWin.empty();
    var rs = [];
    for (var x = 0; x < rsx.length; x++) {
        tmp = rsx[x];
        if (tmp) {
             if (count <= 6 ){
                rs.push("<font style='font-size:1.0em;line-height:80px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                rs.push("<br>");
            } else if (count <= 12) {
                rs.push("<font style='font-size:1.0em;line-height:70px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 2 == 0) {
                    rs.push("&nbsp;&nbsp;&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 18) {
                rs.push("<font style='font-size:0.75em;line-height:40px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 3 == 0) {
                    rs.push("&nbsp;&nbsp;&nbsp;&nbsp;");
                } else if (x % 3 == 1) {
                    rs.push("&nbsp;&nbsp;&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 32) {
                rs.push("<font style='font-size:0.65em;line-height:20px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 4 == 0) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 4 == 1) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 4 == 2) {
                    rs.push("&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 40) {
                rs.push("<font style='font-size:0.55em;line-height:10px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 5 == 0) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 5 == 1) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 5 == 2) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 5 == 3) {
                    rs.push("&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 54) {
                rs.push("<font style='font-size:0.45em;line-height:5px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 6 == 0) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 6 == 1) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 6 == 2) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 6 == 3) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 6 == 4) {
                    rs.push("&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 100) {
                rs.push("<font style='font-size:0.40em;line-height:5px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 10 == 0) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 1) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 2) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 3) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 4) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 5) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 6) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 7) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 10 == 8) {
                    rs.push("&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else if (count <= 160) {
                rs.push("<font style='font-size:0.35em;line-height:5px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                if (x % 16 == 0) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 1) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 2) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 3) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 4) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 5) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 6) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 7) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 8) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 9) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 10) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 11) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 12) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 13) {
                    rs.push("&nbsp;&nbsp;");
                } else if (x % 16 == 14) {
                    rs.push("&nbsp;&nbsp;");
                } else {
                    rs.push("<br>");
                }
            } else {
                rs.push("<font style='font-size:0.35em;line-height:5px;color:white;font-family:SimHei;'>" + tmp.Name + "</font>");
                rs.push("&nbsp;&nbsp;");
            }
        } else {
            break;
        }
    }
    //if (debug) { console.log("rs"); console.log(rs.length); console.log(rs); }
    ListWin.html(rs.join(""));
    onccSelect();
};
