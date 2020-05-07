//opgave 14
import { Persoon } from "./Persoon";
export class User extends Persoon {
    private e_mail: string;
    private wachtwoord: string;
    private rol: string;
    static usernummer: number = 1;

    //constructor
    constructor(naam: string, leeftijd: number, geslacht: string, e_mail: string, wachtwoord: string, rol: string) {
        //SuperClass (Persoon) aanroepen
        super(naam, leeftijd, geslacht);
       
        this.e_mail = e_mail;
        this.wachtwoord = wachtwoord;
        this.rol = rol;
        console.log('\tNieuw User nummer: ', User.usernummer++, 'extends Persoon');

        // lab 05?
        if(this.geslacht === "M"){
        // ik weet niet of de lab vraagt om het vervangen van this.naam of om de begroeting bovenaan te hebben dus bij deze beide :)
        this.naam = "\n\tGeachte heer";
            // console.log("\n\tGeachte Heer!");
        }else if(this.geslacht ==="V"){
            console.log("\n\tGeachte Mevrouw!");
        } else{
            console.log("\n\tGeachte Alien?!");
        }
    }
    public setEmail(e_mail: string): void {
        this.e_mail = e_mail;
    }
    public setWachtwoord(wachtwoord: string): void {
        this.wachtwoord = wachtwoord;
    }
    public setRol(rol: string): void {
        this.rol = rol;
    }
    public getEmail(): string {
        return this.e_mail;
    }
    public getWachtwoord(): string {
        return this.wachtwoord;
    }
    public getRol(): string {
        return this.rol;
    }

   

    // Overzetten naar toString() methode 
    // zodat alle gegevens van de Persoon worden geprint
    
    public toString(): string {

        return (super.toString() +
            "\tE-mail: " + this.e_mail + "\n" +
            "\tWachtwoord: " + this.wachtwoord + "\n" +
            "\tRol: " + this.rol + "\n");

           
    }

    
    }

