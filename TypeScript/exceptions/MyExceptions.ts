//Opgave 20 exceptions:
class MyExceptions{
    // importeer hier de file system module
    private fs = require('fs');
    constructor(){ }
    creëerFile(){
        this.fs.writeFile('file.txt',
        '{"naam":"Juist", "e_mail", "juist@gmail.com"}',
        function(err){
            if(err){
                return console.error(err);
            }
            console.log("Bestand was aangemaakt!");
        });
    }
    leesFile(){
       // this.fs.readFile('filexxx.txt', function(err, data){

        this.fs.readFile('file.txt', function(err, data){
            if(err){
                return console.error(err);
            }
            console.log(data.toString());
        });
    }
// in deze methode maken we een eigen exception:
//opgave 21
public delen(a: number, b: number): number{
    if(b == 0){
        throw new Error("\nDeler kan niet 0 zijn!");
    } else {
        return a/b;
    }
} 


}
// uitvoeren:
let myExceptions: MyExceptions = new MyExceptions();
myExceptions.creëerFile();
myExceptions.leesFile();
//opgave 21
let resultaat: number = 0;
try{
    // exception
    resultaat = myExceptions.delen(1, 0);
} catch(e){
    // afhandeling exception
    console.log(e.message);
}