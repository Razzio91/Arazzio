// Opgave 3:
var scope = 'superscope';
var aantal = 0;
function testScope(){
    let scope = 'lokalescope';
    aantal++;
    console.log('\tDit is test nummer: ' + aantal);
    console.log('\tFunction scope is: ' + scope);
}
console.log('\tScript scope is: '+ scope);
testScope();
testScope();

// opgave 4:
let bericht;//ongedefinieerd
let naam: string = 'Jurson';
let leeftijd: number = 17;
let leerplichting: boolean = true;
let cijfers: number[] =[7,8,9];
let vakken: string[] = ['NL', 'ENG', 'Rek'];
console.log('\tHallo, mijn naam is', naam,'\b.');

//tuple:
let student: [string, number, boolean];
//initialiseer tuple:
student = ['Jurson', 17, true];
enum Cijfers{Vakken, Cijfers};

console.log('\tDe vakken zijn: ' , Cijfers.Vakken , '\n\tEn de cijfers: '  ,  Cijfers.Cijfers);

