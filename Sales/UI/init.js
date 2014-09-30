define(function (require, exports, module) {
    var man = require('./main');
    var css = require('./main.css');

    var $ = function (id) {
        return document.getElementById(id);
    }

    exports.init = function () {
        var s1 = $('s1');
        var s2 = $('s2');
        var s3 = $('s3');

        var name = man.getName();
        var age = man.getAge();
        var msg = man.say();

        s1.innerHTML = name;
        s2.innerHTML = age;
        s3.innerHTML = msg;
    }
});