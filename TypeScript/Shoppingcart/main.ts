import {Item} from "./item";
import {MyShoppingcart} from "./MyShoppingcart";
let item1: Item = new Item("001", "Toshiba", "SX", 999.99, 10); 
let item2: Item = new Item("002", "Acer", "Aspire", 1099.99, 5);

let totaal: number;
totaal = ((item1.getPrijs() * item1.getAantal()) + (item2.getAantal() * item2.getPrijs()));

let myShoppingcart: MyShoppingcart = new MyShoppingcart();
myShoppingcart.addToCart(item1);
myShoppingcart.addToCart(item2);

myShoppingcart.printCart();
// lab 06?
console.log("\n\t\t\t\b\b", "\b\bTotaal bedrag is: ", Math.round(totaal * 100) / 100);