"use strict";
exports.__esModule = true;
var apples = 5;
var speed = 'ludicrous';
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// Array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 6.2831];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20
};
// Function
var logNumber = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
