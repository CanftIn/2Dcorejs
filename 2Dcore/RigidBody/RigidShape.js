"use strict";

function RigidShape(center) {
    this.mCenter = center;
    //angle
    this.mAngle = 0;//Math.random() * 90;
    gEngine.Core.mAllObjects.push(this);
}

// anime
RigidShape.prototype.update = function () {
    if (this.mCenter.y < gEngine.Core.mHeight &&  this.mFix !== 0) {
        this.move(new Vec2(0, 1));
    }
};