"use strict";
exports.__esModule = true;
// opgave 5 Class/object:
var Persoon = /** @class */ (function () {
    // opgave 6:
    // constructor-methode:
    function Persoon(naam, leeftijd, geslacht) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('\n\tNieuw Persoon-object aangemaakt.');
        console.log('\tDe property naam is ' + this.naam);
    }
    // opgave 8 get en setMethodes:
    Persoon.prototype.setGeslacht = function (geslacht) {
        this.geslacht = geslacht;
    };
    Persoon.prototype.getGeslacht = function () {
        return this.geslacht;
    };
    // Lab 03: Encapsulation:
    Persoon.prototype.setNaam = function (naam) {
        this.naam = naam;
    };
    Persoon.prototype.getNaam = function () {
        return this.naam;
    };
    // opgave 9 maak de methode:
    Persoon.prototype.setLeeftijd = function (leeftijd) {
        this.leeftijd = leeftijd;
    };
    Persoon.prototype.getLeeftijd = function () {
        return this.leeftijd;
    };
    Persoon.prototype.setGemiddeldCijfer = function (gemiddeldCijfer) {
        this.gemiddeldCijfer = gemiddeldCijfer;
    };
    Persoon.prototype.getGemiddeldCijfer = function () {
        return this.gemiddeldCijfer;
    };
    Persoon.prototype.setIsStudent = function (isStudent) {
        this.isStudent = isStudent;
    };
    Persoon.prototype.getIsStudent = function () {
        return this.isStudent;
    };
    // opgave 11 getGegevens():
    Persoon.prototype.getGegevens = function () {
        var gegevens = "\n\tDe gegevens van " + this.naam + " zijn: \n" +
            "\tLeeftijd: " + this.leeftijd + "\n" +
            "\tGeslacht: " + this.geslacht + "\n";
        return gegevens;
    };
    // opgave 12 toString():
    Persoon.prototype.toString = function () {
        return ("\tDe gegevens van " + this.naam + " zijn: \n" +
            "\tLeeftijd: " + this.leeftijd + "\n" +
            "\tGeslacht: " + this.geslacht + "\n");
    };
    // Lab 04 Json gegevensOpslaan():
    Persoon.prototype.gegevensOpslaan = function () {
        var persoonsgegevens = { "Naam": this.naam, "Leeftijd": this.leeftijd,
            "Geslacht": this.geslacht, "Is Student": this.isStudent, "Gemiddeld Cijfer": this.gemiddeldCijfer };
        return persoonsgegevens;
    };
    return Persoon;
}());
exports.Persoon = Persoon;
