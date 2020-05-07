import {Item} from "./item";
import {IShoppingcart} from "./IShoppingcart";
export abstract class Shoppingcart implements IShoppingcart{
    printCart(): void{};
    // arraylist geshopte items
    public itemList: Array<Item> = new Array<Item>();

    //methode toevoegen item
    public addToCart(item: Item): void{
        this.itemList.push(item);
    }
}