import { IWinkelmandje } from './IWinkelmandje'
import { Product } from './Product'

export abstract class Winkelmandje implements IWinkelmandje 
{
    public itemList: Array<Product> = new Array<Product>();

    public voegToe(product: Product): void {
        this.itemList.push(product);
    }

    public toonMandje(): void {
        this.toonMandje();
    }
}