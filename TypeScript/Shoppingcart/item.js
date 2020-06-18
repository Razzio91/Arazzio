"use strict";
exports.__esModule = true;
//opgave 15
var Item = /** @class */ (function () {
    function Item(id, merk, model, prijs, aantal) {
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getOmschrijving = function () {
        return (this.merk + " " + this.model);
    };
    Item.prototype.getPrijs = function () {
        return this.prijs;
    };
    Item.prototype.getAantal = function () {
        return this.aantal;
    };
    Item.prototype.setAantal = function (aantal) {
        this.aantal = aantal;
    };
    //lab 06
    Item.prototype.setTotaal = function (totaal) {
        this.totaal = totaal;
    };
    Item.prototype.getTotaal = function () {
        return (this.aantal * this.prijs);
    };
    //lab 07
    Item.prototype.setPrijs = function (prijs) {
        if (this.prijs >= 1 && prijs <= 10) {
            return this.prijs;
        }
        else {
            throw new Error("\n De prijs klopt niet");
        }
    };
    return Item;
}());
exports.Item = Item;
