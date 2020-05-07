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
    //hier loop ik vast
    Item.prototype.setPrijs = function (prijs) {
        this.prijs = prijs;
        if (this.prijs > 0 && this.prijs < 11) {
            return this.setPrijs(prijs);
        }
        else if (this.prijs > 0 && this.prijs < 11) {
            throw new Error("\nPrijs klopt niet!");
        }
    };
    Item.prototype.getAantal = function () {
        return this.aantal;
    };
    Item.prototype.setAantal = function (aantal) {
        this.aantal = aantal;
    };
    //lab 06?
    Item.prototype.setTotaal = function (totaal) {
        this.totaal = totaal;
    };
    Item.prototype.getTotaal = function () {
        return (this.aantal * this.prijs);
    };
    return Item;
}());
exports.Item = Item;
try {
    // exception
    ;
}
catch (e) {
    // afhandeling exception
    console.log(e.message);
}
