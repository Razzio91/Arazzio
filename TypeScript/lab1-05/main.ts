// opgave 7:
import{Persoon} from "./Persoon";
let umut: Persoon = new Persoon('Umut', 18, 'M');
let umdemirelut: Persoon = new Persoon('Demirel', 19, 'M');

// lab 01: 
let aras: Persoon = new Persoon('Arsalan', 29, 'M');
let thamara: Persoon = new Persoon('Thamara', 18, 'V');

// opgave 10:
umdemirelut.setLeeftijd(24);
console.log("\n\tDe leeftijd van Demirel is: " + umdemirelut.getLeeftijd());
// kan plus of komma, de ene keer geeft de komma het effect geel aan het aangegeven object?

// lab 02:
thamara.setLeeftijd(19);
console.log("\n\tDe leeftijd van Thamara is: " , thamara.getLeeftijd());

// opgave 11 roep de methode getGegevens() op:
console.log(thamara.getGegevens());
console.log(umdemirelut.getGegevens());

// lab 04:
aras.setGemiddeldCijfer(100);
aras.setIsStudent(true);
umut.setGemiddeldCijfer(5);
umut.setIsStudent(true);
thamara.setGemiddeldCijfer(10);
thamara.setIsStudent(true);
umdemirelut.setGemiddeldCijfer(0);
umdemirelut.setIsStudent(false);



let persoonsgegevens: string[] = [];
persoonsgegevens.push(JSON.stringify(thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(umut.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(aras.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(umdemirelut.gegevensOpslaan()));

// voor elk persoon-element, toon element
persoonsgegevens.forEach(function(gegevens){
    console.log("\n\t" , gegevens);
});  

// opgave 14
import {User} from "./Users";
let shireen: User = new User("Shireen", 22, 'V', "Shireen@gmail.com", "Uh65Tg", "klant");
console.log(shireen.toString());

let sam: User = new User("Sam", 18, 'M', "Sam@gmail.com", "Ujstdk", "klant");
console.log(sam.toString());
// maak voor de error een getLeeftijd() of verander de private instelling in public in Persoon.ts
// console.log(shireen.leeftijd);