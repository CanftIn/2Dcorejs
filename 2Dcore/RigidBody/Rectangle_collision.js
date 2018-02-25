"use strict";

Rectangle.prototype.collisionTest = function (otherShape, collisionInfo) {
    var status = false;
    if (otherShape.mType === "Circle") {
        status = false;
    } else {
        status = false;
    }
    return status;
};
