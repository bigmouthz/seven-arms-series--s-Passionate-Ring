$.extend($.fn.datagrid.defaults.editors, {
    /*进度条*/
    progressbar: {
        init: function (container, options) {
            var bar = $('<div/>').appendTo(container);
            bar.progressbar(options);
            return bar;
        },
        getValue: function (target) {
            return $(target).progressbar('getValue');
        },
        setValue: function (target, value) {
            $(target).progressbar('setValue', value);
        },
        resize: function (target, width) {
            if ($.boxModel == true) {
                $(target).progressbar('resize', width - (input.outerWidth() - input.width()));
            } else {
                $(target).progressbar('resize', width);
            }
        }
    },
    /*滑动条*/
    slider: {
        init: function (container, options) {
            var slider = $('<div/>').appendTo(container);
            slider.slider(options);
            return slider;
        },
        getValue: function (target) {
            return $(target).slider('getValue');
        },
        setValue: function (target, value) {
            $(target).slider('setValue', value);
        },
        resize: function (target, width) {
            if ($.boxModel == true) {
                $(target).progressbar('slider', { width: width - (input.outerWidth() - input.width()) });
            } else {
                $(target).progressbar('slider', { width: width });
            }
        }
    },
    /*时间框
    datetimebox: {//datetimebox就是你要自定义editor的名称
        init: function (container, options) {
            var input = $('<input class="easyui-datetimebox">').appendTo(container);
            return input.datetimebox({
                formatter: function (date) {
                    return new Date(date).format("yyyy-MM-dd hh:mm:ss");
                }
            });
        },
        getValue: function (target) {
            return $(target).parent().find('input.combo-value').val();
        },
        setValue: function (target, value) {
            $(target).datetimebox("setValue", value);
        },
        resize: function (target, width) {
            var input = $(target);
            if ($.boxModel == true) {
                input.width(width - (input.outerWidth() - input.width()));
            } else {
                input.width(width);
            }
        }
    },*/
    /*日期选择框*/
    datebox: {
        init: function (container, options) {
            var input = $('<input type="text">').appendTo(container);
            input.datebox(options);
            return input;
        },
        destroy: function (target) {
            $(target).datebox('destroy');
        },
        getValue: function (target) {
            return $(target).datebox('getValue');
        },
        setValue: function (target, value) {
            $(target).datebox('setValue', value);
        },
        resize: function (target, width) {
            $(target).datebox('resize', width);
        }
    }
    /*
        ,
    combotree: {
        init: function (container, options) {
            var editor = jQuery('<input type="text">').appendTo(container);
            editor.combotree(options);
            return editor;
        },
        destroy: function (target) {
            jQuery(target).combotree('destroy');
        },
        getValue: function (target) {
            var temp = jQuery(target).combotree('getValues');
            //alert(temp);  
            return temp.join(',');
        },
        setValue: function (target, value) {
            var temp = value.split(',');
            //alert(temp);  
            jQuery(target).combotree('setValues', temp);
        },
        resize: function (target, width) {
            jQuery(target).combotree('resize', width);
        }
    }
    */
});  