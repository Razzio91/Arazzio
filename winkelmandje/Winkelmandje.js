"use strict";
exports.__esModule = true;
var Winkelmandje = /** @class */ (function () {
    function Winkelmandje() {
        this.itemList = new Array();
    }
    Winkelmandje.prototype.voegToe = function (product) {
        this.itemList.push(product);
    };
    Winkelmandje.prototype.toonMandje = function () {
        this.toonMandje();
    };
    return Winkelmandje;
}());
exports.Winkelmandje = Winkelmandje;
