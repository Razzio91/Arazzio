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
var product_1 = require("./product");
var Boek = /** @class */ (function (_super) {
    __extends(Boek, _super);
    function Boek(id, merk, model, prijs, aantal) {
        var _this = _super.call(this, id, prijs, aantal) || this;
        _this.titel = merk;
        _this.auteur = model;
        return _this;
    }
    Boek.prototype.getOmschrijving = function () {
        return (this.titel + " " + this.auteur);
    };
    return Boek;
}(product_1.Product));
exports.Boek = Boek;
