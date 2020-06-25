"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    // arraylist geshopte items
    // public itemList: Array<Item> = new Array<Item>();
    //methode toevoegen item
    function Product(id, prijs, aantal) {
        this.id = id;
        this.prijs = prijs;
        this.aantal = aantal;
    }
    Product.prototype.getID = function () {
        return this.id;
    };
    Product.prototype.getPrijs = function () {
        return this.prijs.toString();
    };
    Product.prototype.getAantal = function () {
        return this.aantal.toString();
    };
    Product.prototype.getOmschrijving = function () {
        return this.getOmschrijving();
    };
    return Product;
}());
exports.Product = Product;
