//opgave 15
export class Item{
    private id: string;
    private merk: string;
    private model: string; 
    private prijs: number;
    private aantal: number;
    private totaal: number;    

    constructor(id: string, merk: string, model: string, prijs: number, aantal:number){
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
        
    }
    public getId(): string{
        return this.id;
    }
    public getOmschrijving(): string{
        return(this.merk + " " + this.model);
    }
    public getPrijs(): number{
        return this.prijs;
    }

    //hier loop ik vast
    public setPrijs(prijs: number): void{
        this.prijs = prijs;
        if(this.prijs > 0 && this.prijs < 11){
            return this.setPrijs(prijs);
        } else if(this.prijs !> 0 && this.prijs !< 11) {
            throw new Error("\nPrijs klopt niet!");
        }
    }
    public getAantal(): number{
        return this.aantal;
    }
    public setAantal(aantal: number):void{
        this.aantal = aantal;
    }
    //lab 06?
    public setTotaal(totaal: number): void{
        this.totaal = totaal;
    }
    public getTotaal(): number{
        return(this.aantal * this.prijs);
    }
   
}

try{
    // exception
    ;
} catch(e){
    // afhandeling exception
    console.log(e.message);
}