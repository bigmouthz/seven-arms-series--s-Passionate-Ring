define(function (require, exports, module) {
    var _msg = 'not set msg!';

    exports.setMsg = function (msg) {
        _msg = msg;
    }

    exports.getMsg = function () {
        return _msg;
    }
});