"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//opgave 14
var Persoon_1 = require("./Persoon");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    //constructor
    function User(naam, leeftijd, geslacht, e_mail, wachtwoord, rol) {
        var _this = 
        //SuperClass (Persoon) aanroepen
        _super.call(this, naam, leeftijd, geslacht) || this;
        _this.e_mail = e_mail;
        _this.wachtwoord = wachtwoord;
        _this.rol = rol;
        console.log('\tNieuw User nummer: ', User.usernummer++, 'extends Persoon');
        // lab 05?
        if (_this.geslacht === "M") {
            // super(naam, leeftijd, geslacht);
            _this.naam = "\n\tGeachte heer";
            // console.log("\n\tGeachte Heer!");
        }
        else if (_this.geslacht === "V") {
            console.log("\n\tGeachte Mevrouw!");
        }
        else {
            console.log("\n\tGeachte Alien?!");
        }
        return _this;
    }
    User.prototype.setEmail = function (e_mail) {
        this.e_mail = e_mail;
    };
    User.prototype.setWachtwoord = function (wachtwoord) {
        this.wachtwoord = wachtwoord;
    };
    User.prototype.setRol = function (rol) {
        this.rol = rol;
    };
    User.prototype.getEmail = function () {
        return this.e_mail;
    };
    User.prototype.getWachtwoord = function () {
        return this.wachtwoord;
    };
    User.prototype.getRol = function () {
        return this.rol;
    };
    // Overzetten naar toString() methode 
    // zodat alle gegevens van de Persoon worden geprint
    User.prototype.toString = function () {
        return (_super.prototype.toString.call(this) +
            "\tE-mail: " + this.e_mail + "\n" +
            "\tWachtwoord: " + this.wachtwoord + "\n" +
            "\tRol: " + this.rol + "\n");
    };
    User.usernummer = 1;
    return User;
}(Persoon_1.Persoon));
exports.User = User;
