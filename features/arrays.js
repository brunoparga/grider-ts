"use strict";
exports.__esModule = true;
var carMakers = ['ford', 'toyota', 'chevy'];
var numbers = [];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
// Help with inference when extracting values
var car = carMakers[0];
// Prevent incompatible values
carMakers.push('mazda');
// Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDates = [new Date()];
importantDates.push('2186-07-16');
