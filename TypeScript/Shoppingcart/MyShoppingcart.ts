//Opgave 18
import {Shoppingcart} from "./Shoppingcart";
import { Item } from "./item";
export class MyShoppingcart extends Shoppingcart{
 

        public printCart(): void{

        //formateer de string kolommen
        console.log("Product Omschrijving \t Prijs \t Aantal \tTotaal \n");
      
      
        this.itemList.forEach(function(item){
            
            
            
            console.log(
                item.getId() + "\t" + item.getOmschrijving() + "\t" +
                item.getPrijs() + "\t" + item.getAantal() + "\t"
                + item.getTotaal()); //lab 06?
                
        });
    
    } 

   
   

}