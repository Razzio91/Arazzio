import { Product } from "./product";
export class Boek extends Product{
    public titel: String;
    public auteur: String;
    
    constructor(id: string, merk: string, model: string, prijs:number, aantal:number) {
        super (id,prijs,aantal);
        this.titel = merk;
        this.auteur = model;
        
       }

    public getOmschrijving(): string{
    return (this.titel + " " + this.auteur); 
   }

}