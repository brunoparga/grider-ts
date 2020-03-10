"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var faker_1 = __importDefault(require("faker"));
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1["default"].company.companyName();
        this.catchPhrase = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "\n      <div>\n        <h1>Company Name: " + this.companyName + "</h1>\n        <h3>Catchphrase: " + this.catchPhrase + "</h3>\n      </div>\n    ";
    };
    return Company;
}());
exports.Company = Company;
