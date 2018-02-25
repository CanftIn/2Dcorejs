"use strict";

function RigidShape(center) {
    this.mCenter = center;
    //angle
    this.mAngle = Math.random() * 90;//0;
    gEngine.Core.mAllObjects.push(this);
}