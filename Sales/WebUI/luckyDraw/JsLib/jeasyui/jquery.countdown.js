﻿jQuery.fn.countdown = function (g) { var b = { stepTime: 60, format: "dd:hh:mm:ss", startTime: "01:12:32:55", digitImages: 6, digitWidth: 53, digitHeight: 77, timerEnd: function () { }, image: "digits.png" }; var f = [], a; var c = function (o) { var q = 0; var w = 0; var h = 0; var x = 0; if (typeof b.startTime == "object") { var j = new Date(); if (b.startTime.getTime() < j.getTime()) { b.startTime.setFullYear(b.startTime.getFullYear() + 1) } var k = Math.ceil((b.startTime.getTime() - j.getTime()) / 1000); var u = Math.floor(k / 86400); var s = Math.floor((k % 86400) / 3600); var m = Math.floor(((k % 86400) % 3600) / 60); var t = ((k % 86400) % 3600) % 60; b.startTime = u + ":" + s + ":" + m + ":" + t } _startTime = b.startTime.split(""); cCounter = 0; for (var n = 0; n < _startTime.length; n++) { if (isNaN(parseInt(_startTime[n]))) { cCounter = cCounter + 1 } } var p = b.startTime.split(":"); var v = ""; for (var n = 0; n < p.length; n++) { var r = 59; if (p.length == 3) { if (n == 0) { r = 23 } } if (p.length == 4) { if (n == 0) { r = 9999 } if (n == 1) { r = 23 } } if (p[n] > r) { p[n] = r } if (p[n].length < 2) { p[n] = "0" + p[n] } } b.startTime = p.join(":"); switch (cCounter) { case 3: if (b.startTime.split(":")[0].length == 3) { b.format = "ddd:hh:mm:ss" } else { b.format = "dd:hh:mm:ss" } break; case 2: b.format = "hh:mm:ss"; break; case 1: b.format = "mm:ss"; break; case 0: b.format = "ss"; break } b.startTime = b.startTime.split(""); b.format = b.format.split(""); for (var n = 0; n < b.startTime.length; n++) { if (parseInt(b.startTime[n]) >= 0) { var l = jQuery('<div id="cnt_' + n + '" class="cntDigit" />').css({ height: b.digitHeight * b.digitImages * 10, "float": "left", background: "url('" + b.image + "')", width: b.digitWidth }); f.push(l); e(q, -((parseInt(b.startTime[n]) * b.digitHeight * b.digitImages))); f[q].__max = 9; switch (b.format[n]) { case "h": if (w < 1) { f[q].__max = 2; w = 1 } else { f[q].__condmax = 3 } break; case "d": f[q].__max = 9; break; case "m": if (h < 1) { f[q].__max = 5; h = 1 } else { f[q].__condmax = 9 } break; case "s": if (x < 1) { f[q].__max = 5; x = 1 } else { f[q].__condmax = 9 } break } ++q } else { l = jQuery('<div class="cntSeparator"/>').css({ "float": "left" }).text(b.startTime[n]) } o.append("<div>"); o.append(l); o.append("</div>") } }; var e = function (h, i) { if (i !== undefined) { return f[h].css({ marginTop: i + "px" }) } return parseInt(f[h].css("marginTop").replace("px", "")) }; var d = function (h) { f[h]._digitInitial = -(f[h].__max * b.digitHeight * b.digitImages); return function i() { mtop = e(h) + b.digitHeight; if (mtop == b.digitHeight) { e(h, f[h]._digitInitial); if (h > 0) { d(h - 1)() } else { clearInterval(a); for (var j = 0; j < f.length; j++) { e(j, 0) } b.timerEnd(); return } if ((h > 0) && (f[h].__condmax !== undefined) && (f[h - 1]._digitInitial == e(h - 1))) { e(h, -(f[h].__condmax * b.digitHeight * b.digitImages)) } return } e(h, mtop); if (e(h) / b.digitHeight % b.digitImages != 0) { setTimeout(i, b.stepTime) } if (mtop == 0) { f[h].__ismax = true } } }; $.extend(b, g); this.css({ height: b.digitHeight, overflow: "hidden" }); c(this); a = setInterval(d(f.length - 1), 1000) };