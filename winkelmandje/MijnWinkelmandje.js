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
var Winkelmandje_1 = require("./Winkelmandje");
var MijnWinkelmandje = /** @class */ (function (_super) {
    __extends(MijnWinkelmandje, _super);
    function MijnWinkelmandje() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MijnWinkelmandje.prototype.toonMandje = function () {
        console.log("Product omschrijving \t Prijs \t Aantal \t");
        this.itemList.forEach(function (item) {
            console.log(item.getID() + "\t" + item.getOmschrijving() + "\t" + item.getPrijs() + "\t " + item.getAantal() + "\n");
        });
    };
    return MijnWinkelmandje;
}(Winkelmandje_1.Winkelmandje));
exports.MijnWinkelmandje = MijnWinkelmandje;
