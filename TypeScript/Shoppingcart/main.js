"use strict";
exports.__esModule = true;
// opgave 18 en 19 
var item_1 = require("./item");
var MyShoppingcart_1 = require("./MyShoppingcart");
var item1 = new item_1.Item("001", "Toshiba", "SX", 999.99, 10);
var item2 = new item_1.Item("002", "Acer", "Aspire", 1099.99, 5);
var totaal;
totaal = ((item1.getPrijs() * item1.getAantal()) + (item2.getAantal() * item2.getPrijs()));
var myShoppingcart = new MyShoppingcart_1.MyShoppingcart();
myShoppingcart.addToCart(item1);
myShoppingcart.addToCart(item2);
myShoppingcart.printCart();
// lab 06 interfaces
console.log("\n\t\t\t\b\b", "\b\bTotaal bedrag is: ", Math.round(totaal * 100) / 100);
var prijs = 0;
try {
    prijs = item1.setPrijs(15);
}
catch (e) {
    console.log(e.message);
}
