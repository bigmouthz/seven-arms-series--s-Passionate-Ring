define(function (require, exports, module) {
    var msg = require('./msg');

    var _name = 'tom';
    var _age = '20';

    exports.myName = _name;

    exports.say = function () {
        return msg.getMsg();
    }

    exports.getName = function () {
        return _name;
    }

    exports.getAge = function () {
        return _age;
    }
});