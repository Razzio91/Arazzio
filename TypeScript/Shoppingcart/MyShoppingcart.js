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
//Opgave 18
var Shoppingcart_1 = require("./Shoppingcart");
var item_1 = require("./item");
var MyShoppingcart = /** @class */ (function (_super) {
    __extends(MyShoppingcart, _super);
    function MyShoppingcart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyShoppingcart.prototype.printCart = function () {
        //formateer de string kolommen
        console.log("Product Omschrijving \t Prijs \t Aantal \tTotaal \n");
        this.itemList.forEach(function (item) {
            console.log(item.getId() + "\t" + item.getOmschrijving() + "\t" +
                item.getPrijs() + "\t" + item.getAantal() + "\t"
                + item.getTotaal());
        });
    };
    return MyShoppingcart;
}(Shoppingcart_1.Shoppingcart));
exports.MyShoppingcart = MyShoppingcart;
try {
    item_1.Item;
}
catch (e) {
    console.log(e.message);
}
