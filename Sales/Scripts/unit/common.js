var common = {};

/*-------------------------------------------------------------------------------------
//笼罩层  用法： 
$(function(){
    common.maskcss();
});
common.maskshow('mask');
common.maskhidden('mask');
----------------------------------------------------------------------------------------*/
common.maskcss = function () {
    common.addCssContent("*{margin:0;padding:0;}");
    common.addCssContent(".mask{position:absolute;z-index:999;background-color:#cccccc;display:none;top:0;left:0;filter: Alpha(opacity=50); -moz-opacity:0.5;opacity:0.5;}");
};

common.maskshow = function (divname) {
    var div = document.getElementById(divname);
    var h_c = document.documentElement.clientHeight;
    var w_c = document.documentElement.clientWidth;
    var h_b = document.body.clientHeight;
    var w_b = document.body.clientWidth;
    div.style.width = w_c > w_b ? w_c + "px" : w_b + "px";
    div.style.height = h_c > h_b ? h_c + "px" : h_b + "px";
    div.style.display = "block";
};

common.maskhidden = function (divname) {
    var div = document.getElementById(divname);
    div.style.display = "none";
};


/*-------------------------------------------------------------------------------------
//关闭当前窗口  用法： 
common.close();
----------------------------------------------------------------------------------------*/
common.close = function () {
    var browserName = navigator.appName;
    if (browserName == "Netscape") {
        window.open('', '_self', '');
        window.close();
    }
    else {
        if (browserName == "Microsoft Internet Explorer") {
            window.opener = "whocares";
            window.opener = null;
            window.open('', '_top');
            window.close();
        }
    }
};

/*-------------------------------------------------------------------------------------
//动态添加样式  用法： 
common.addCssFile('test.css');
----------------------------------------------------------------------------------------*/
common.addCssFile = function (cssfile) {
    var str_css = "@import url(" + cssfile + ");"; //定义内容
    try { //IE下可行
        var style = document.createStyleSheet();
        style.cssText = str_css;
    }
    catch (e) { //Firefox,Opera,Safari,Chrome下可行
        var style = document.createElement("style");
        style.type = "text/css";
        style.textContent = str_css;
        document.getElementsByTagName("HEAD").item(0).appendChild(style);
    }
};

/*-------------------------------------------------------------------------------------
//动态添加样式  用法： 
common.addCssContent("*{margin:0;padding:0;}");
----------------------------------------------------------------------------------------*/
common.addCssContent = function (csscontent) {
    var str_css = csscontent; //"body {font-size:5px;}"; 
    try { //IE下可行
        var style = document.createStyleSheet();
        style.cssText = str_css;
    }
    catch (e) { //Firefox,Opera,Safari,Chrome下可行
        var style = document.createElement("style");
        style.type = "text/css";
        style.textContent = str_css;
        document.getElementsByTagName("HEAD").item(0).appendChild(style);
    }
};

/*-------------------------------------------------------------------------------------
//动态添加JS  用法： 
common.js("storeanswer", fun);

----------------------------------------------------------------------------------------*/
common.js = function (jsfile, fun) {
    $.getScript(jsfile + ".js", function () {
        fun();
    });
};


/*-------------------------------------------------------------------------------------
//获得URL参数  用法： 
eg:http://...?id=123
common.getUrlParam("id");

----------------------------------------------------------------------------------------*/
common.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};


/*-------------------------------------------------------------------------------------
//判断是否是Json  用法： 
common.isJson(jsonObj);

----------------------------------------------------------------------------------------*/
common.isJson = function (obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
};

/*-------------------------------------------------------------------------------------
* 增加formatString功能
* 
* 使用方法：common.StringFormat('字符串{0}字符串{1}字符串','第一个变量','第二个变量');

----------------------------------------------------------------------------------------*/
common.StringFormat = function (str) {
    for (var i = 0; i < arguments.length - 1; i++) {
        str = str.replace("{" + i + "}", arguments[i + 1]);
    }
    return str;
};

/*-------------------------------------------------------------------------------------
* 将字符串值转换为数组对象
* 
* 使用方法：common.getList('A,B,C',',');

----------------------------------------------------------------------------------------*/
common.getList = function (value, splitchar) {
    if (value) {
        var values = [];
        var t = value.split(splitchar ? ',' : splitchar);
        for (var i = 0; i < t.length; i++) {
            values.push('' + t[i]); /* 避免他将ID当成数字 */
        }
        return values;
    } else {
        return [];
    }
};

/*-------------------------------------------------------------------------------------
//生成UUID简易方法： 
使用方法:common.GenerateUUID()
----------------------------------------------------------------------------------------*/
common.GenerateUUID = function() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
};

/*-------------------------------------------------------------------------------------
//获取指定范围内的随机数getRanNum()方法, Num表示返回几位小数
使用方法:common.getRanNum(0,10,2)
----------------------------------------------------------------------------------------*/
common.getRanNum = function (minNum, maxNum, Num) {
    if (minNum > maxNum || Num < 0) {
        return 0;
    } else if (Num == 0 || Num == null) {
        return minNum + (maxNum - minNum) * Math.random();
    } else if (Num > 0) {
        return (minNum + (maxNum - minNum) * Math.random()).toFixed(Num);
    }
};


/*-------------------------------------------------------------------------------------
//得到当前浏览器： 
使用方法:common.Browser()
----------------------------------------------------------------------------------------*/
common.Browser = function () {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
     /*
    if (Sys.ie) alert('IE: ' + Sys.ie);
    if (Sys.firefox) alert('Firefox: ' + Sys.firefox);
    if (Sys.chrome) alert('Chrome: ' + Sys.chrome);
    if (Sys.opera) alert('Opera: ' + Sys.opera);
    if (Sys.safari) alert('Safari: ' + Sys.safari);
    if (Sys.ie == 6.0) { alert("fuck!") }
    */
    return Sys;
};

/*-------------------------------------------------------------------------------------
//得到当前浏览器： 
使用方法:common.rc4("我是明文","我是密码")
----------------------------------------------------------------------------------------*/
common.rc4 = function (data, key) {
    var seq = Array(256); //int
    var das = Array(data.length); //code of data
    for (var i = 0; i < 256; i++) {
        seq[i] = i;
        var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
    }
    for (var i = 0; i < data.length; i++) {
        das[i] = data.charCodeAt(i)
    }
    for (var x = 0; x < das.length; x++) {
        var i = (i + 1) % 256;
        var j = (j + seq[i]) % 256;
        var temp = seq[i];
        seq[i] = seq[j];
        seq[j] = temp;
        var k = (seq[i] + (seq[j] % 256)) % 256;
        das[x] = String.fromCharCode(das[x] ^ seq[k]);
    }
    return das.join('');
}


common.padLeft = function (str, lenght) {
    if (str.length >= lenght)
        return str;
    else
        return common.padLeft("0" + str, lenght);
};

common.padRight = function (str, lenght) {
    if (str.length >= lenght)
        return str;
    else
        return common.padRight(str + "0", lenght);
};