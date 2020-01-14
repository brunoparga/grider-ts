"use strict";
exports.__esModule = true;
var add = function (a, b) {
    return a + b;
};
// Don't rely on return type inference:
var subtract = function (a, b) {
    a - b;
};
// This actually returns void!
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
