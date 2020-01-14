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
// 2) When we declare a variable on one line and initialize it later
var words = ['red', 'green', 'blue'];
var foundWord;
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    if (word === 'green') {
        foundWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    if (number > 0) {
        numberAboveZero = number;
    }
}
