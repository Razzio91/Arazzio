// import {Item} from "./item";
import {Iproduct} from "./Iproduct";
export abstract class Product implements Iproduct
{
   private id: string;
   private prijs: number;
   private aantal: number;
    // arraylist geshopte items
    // public itemList: Array<Item> = new Array<Item>();

    //methode toevoegen item
    constructor(id: string, prijs: number, aantal: number) {
        this.id = id;
        this.prijs = prijs;
        this.aantal = aantal;

    }
  public getID(): string{
      return this.id;
  }
  public getPrijs(): string{
      return this.prijs.toString();
  }
  public getAantal(): string{
      return this.aantal.toString();
  }
  public getOmschrijving(): string{
      return this.getOmschrijving();
  }

}