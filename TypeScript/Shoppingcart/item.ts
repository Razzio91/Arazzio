import { MyShoppingcart } from "./MyShoppingcart";

//opgave 15
export class Item {
    private id: string;
    private merk: string;
    private model: string;
    private prijs: number;
    private aantal: number;
    public totaal: number;

    constructor(id: string, merk: string, model: string, prijs: number, aantal: number) {
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;

    }
    public getId(): string {
        return this.id;
    }
    public getOmschrijving(): string {
        return (this.merk + " " + this.model);
    }
    public getPrijs(): number {
        return this.prijs;
    }

   
    public getAantal(): number {
        return this.aantal;
    }
    public setAantal(aantal: number): void {
        this.aantal = aantal;
    }
    //lab 06
    
    public setTotaal(totaal: number): void {

        this.totaal = totaal;
    }
    public getTotaal(): number {
        return (this.aantal * this.prijs);
    }

    //lab 07
    public setPrijs(prijs: number): number {
        if(this.prijs >= 1 && prijs <= 10){
        return this.prijs;
        
       } else{
         throw new Error("\n De prijs klopt niet");
       }
     }
    }

      

 