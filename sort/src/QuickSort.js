"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.quickSort = function (list) {
    if (list.length < 2) {
        return list;
    }
    // const smaller = list.slice(1).filter((element) => element < list[0])
    // const pivots = list.filter((element) => element === list[0])
    // const larger = list.slice(1).filter((element) => element > list[0])
    var _a = list.reduce(function (lists, element) {
        if (element < list[0]) {
            return [__spreadArrays(lists[0], [element]), lists[1], lists[2]];
        }
        else if (element === list[0]) {
            return [lists[0], __spreadArrays(lists[1], [element]), lists[2]];
        }
        else {
            return [lists[0], lists[1], __spreadArrays(lists[2], [element])];
        }
    }, [[], [], []]), smaller = _a[0], equal = _a[1], larger = _a[2];
    return exports.quickSort(smaller).concat(equal).concat(exports.quickSort(larger));
};
var numbers = [881, 136, 404, 52, 8, 81, 95, 76, 20, 98, 69, 37, 48, 5, 86, 61, 91, 37, 61, 24, 57, 3, 90, 16, 12, 63, 40, 26, 98, 56, 59, 92, 44, 24, 27, 21, 78, 88, 94, 7, 67, 46, 29, 54, 71, 80, 54, 37, 99, 92, 5, 99, 18, 30, 6, 95, 23, 10, 29, 57, 48, 63, 14, 97, 9, 95, 39, 16, 7, 71, 12, 2, 44, 3, 31, 70, 10, 44, 24, 17, 45, 75, 48, 61, 26, 82, 40, 37, 42, 72, 71, 91, 38, 39, 14, 13, 24, 18, 46, 224];
console.log(exports.quickSort(numbers));
