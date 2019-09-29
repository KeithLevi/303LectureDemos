/* eslint-disable require-jsdoc */
"use strict";

let circle = {
    radius:  1,
    circumference:  function() {
        return this.radius * 2 * Math.PI;
    },
    area:  function() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log("circumference of unit circle is: " + circle.circumference());
console.log("area of unit circle is: " + circle.area());