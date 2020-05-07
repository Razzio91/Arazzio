"use strict";
exports.__esModule = true;
var Shoppingcart = /** @class */ (function () {
    function Shoppingcart() {
        // arraylist geshopte items
        this.itemList = new Array();
    }
    Shoppingcart.prototype.printCart = function () { };
    ;
    //methode toevoegen item
    Shoppingcart.prototype.addToCart = function (item) {
        this.itemList.push(item);
    };
    return Shoppingcart;
}());
exports.Shoppingcart = Shoppingcart;
