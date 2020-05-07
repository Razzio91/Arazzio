//Opgave 20 exceptions:
var MyExceptions = /** @class */ (function () {
    function MyExceptions() {
        // importeer hier de file system module
        this.fs = require('fs');
    }
    MyExceptions.prototype.creëerFile = function () {
        this.fs.writeFile('file.txt', '{"naam":"Juist", "e_mail", "juist@gmail.com"}', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Bestand was aangemaakt!");
        });
    };
    MyExceptions.prototype.leesFile = function () {
        // this.fs.readFile('filexxx.txt', function(err, data){
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    };
    // in deze methode maken we een eigen exception:
    MyExceptions.prototype.delen = function (a, b) {
        if (b == 0) {
            throw new Error("\nDeler kan niet 0 zijn!");
        }
        else {
            return a / b;
        }
    };
    return MyExceptions;
}());
// uitvoeren:
var myExceptions = new MyExceptions();
myExceptions.creëerFile();
myExceptions.leesFile();
var resultaat = 0;
try {
    // exception
    resultaat = myExceptions.delen(1, 0);
}
catch (e) {
    // afhandeling exception
    console.log(e.message);
}
