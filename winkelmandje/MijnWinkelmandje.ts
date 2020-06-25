import { Winkelmandje } from "./Winkelmandje";

export class MijnWinkelmandje extends Winkelmandje{
    public toonMandje(): void {
        console.log("Product omschrijving \t Prijs \t Aantal \t");
        this.itemList.forEach(function(item){
            console.log(item.getID() + "\t" + item.getOmschrijving() + "\t" + item.getPrijs() + "\t " + item.getAantal() + "\n");
        });
    }
}