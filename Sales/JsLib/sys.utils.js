/**
* 包含easyui的扩展和常用的方法
*
*/

var sys = $.extend({}, sys); /* 全局对象 */

$.fn.panel.defaults.onBeforeDestroy = function () {/* tab关闭时回收内存 */
    var frame = $('iframe', this);
    try {
        if (frame.length > 0) {
            frame[0].contentWindow.document.write('');
            frame[0].contentWindow.close();
            frame.remove();
            if ($.browser.msie) {
                CollectGarbage();
            }
        } else {
            $(this).find('.combo-f').each(function () {
                var panel = $(this).data().combo.panel;
                panel.panel('destroy');
            });
        }
    } catch (e) {
    }
};

$.fn.panel.defaults.loadingMessage = '数据加载中，请稍候....';
$.fn.datagrid.defaults.loadingMessage = '数据加载中，请稍候....';

var easyuiErrorFunction = function (XMLHttpRequest) {
    $.messager.alert('错误', XMLHttpRequest.responseText);
};
$.fn.datagrid.defaults.onLoadError = easyuiErrorFunction;
$.fn.treegrid.defaults.onLoadError = easyuiErrorFunction;
$.fn.combogrid.defaults.onLoadError = easyuiErrorFunction;
$.fn.combobox.defaults.onLoadError = easyuiErrorFunction;
$.fn.form.defaults.onLoadError = easyuiErrorFunction;

var easyuiPanelOnMove = function (left, top) {/* 防止超出浏览器边界 */
    if (left < 0) {
        $(this).window('move', {
            left: 10
        });
    }
    if (top < 0) {
        $(this).window('move', {
            top: 10
        });
    }
};
$.fn.panel.defaults.onMove = easyuiPanelOnMove;
$.fn.window.defaults.onMove = easyuiPanelOnMove;
$.fn.dialog.defaults.onMove = easyuiPanelOnMove;

$.extend($.fn.datagrid.defaults.editors, {
    combocheckboxtree: {
        init: function (container, options) {
            var editor = $('<input/>').appendTo(container);
            options.multiple = true;
            editor.combotree(options);
            return editor;
        },
        destroy: function (target) {
            $(target).combotree('destroy');
        },
        getValue: function (target) {
            return $(target).combotree('getValues').join(',');
        },
        setValue: function (target, value) {
            $(target).combotree('setValues', sys.getList(value));
        },
        resize: function (target, width) {
            $(target).combotree('resize', width);
        }
    }
});

sys.isJson = function (obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}

/**
* 增加formatString功能
* 
* 使用方法：sys.fs('字符串{0}字符串{1}字符串','第一个变量','第二个变量');
*/
sys.fs = function (str) {
    for (var i = 0; i < arguments.length - 1; i++) {
        str = str.replace("{" + i + "}", arguments[i + 1]);
    }
    return str;
};

/**
* 获得URL参数
*/
sys.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
};

sys.getList = function (value) {
    if (value) {
        var values = [];
        var t = value.split(',');
        for (var i = 0; i < t.length; i++) {
            values.push('' + t[i]); /* 避免他将ID当成数字 */
        }
        return values;
    } else {
        return [];
    }
};

/* 判断浏览器是否是IE并且版本小于8 */
sys.isLessThanIe8 = function () {
    return ($.browser.msie && $.browser.version < 8);
};

sys.ArraryClone = function (inarrary) {
    var outarray = [];
    for (var i = 0, l = inarrary.length; i < l; i++)
        outarray.push(inarrary[i]);
    return outarray;
};