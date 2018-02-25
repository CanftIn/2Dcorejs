/* global object: gEngine */

"use strict";

function userControl(event) {
    var keycode;
    var width = gEngine.Core.mWidth;
    var height = gEngine.Core.mHeight;
    var context = gEngine.Core.mContext;
    if (window.event) { // IE
        keycode = event.keyCode;
    }else if (event.which) { // Netscape/Firefox/Opera 
        keycode = event.which;
    }
    if (keycode === 70) { //f
        context.strokeRect(Math.random() * width * 0.8,
                Math.random() * height * 0.8,
                Math.random() * 30 + 10, Math.random() * 30 + 10);
    }
    if (keycode === 71) { //g
        context.beginPath();
        context.arc(Math.random() * width * 0.8,
                    Math.random() * height * 0.8,
                    Math.random() * 30 + 10, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    }
}