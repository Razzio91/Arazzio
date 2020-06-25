import { Product } from './Product';
export class Laptop extends Product {
    private merk: string;
    private model: string;

    constructor(id: string, merk: string, model: string, prijs: number, aantal: number) {
        super(id, prijs, aantal);
        this.merk = merk;
        this.model = model;
    }

    public getOmschrijving(): string {
        return (this.merk + " " + this.model);
    }
}