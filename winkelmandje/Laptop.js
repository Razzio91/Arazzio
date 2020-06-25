"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Product_1 = require("./Product");
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(id, merk, model, prijs, aantal) {
        var _this = _super.call(this, id, prijs, aantal) || this;
        _this.merk = merk;
        _this.model = model;
        return _this;
    }
    Laptop.prototype.getOmschrijving = function () {
        return (this.merk + " " + this.model);
    };
    return Laptop;
}(Product_1.Product));
exports.Laptop = Laptop;
