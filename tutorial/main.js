var scope = 'superscope';
var aantal = 0;
function testScope() {
    var scope = 'lokalescope';
    aantal++;
    console.log('\tDit is test nummer: ' + aantal);
    console.log('\tFunction scope is: ' + scope);
}
console.log('\tScript scope is: ' + scope);
testScope();
testScope();
var bericht; //ongedefinieerd
var naam = 'Jurson';
var leeftijd = 17;
var leerplichting = true;
var cijfers = [7, 8, 9];
var vakken = ['NL', 'ENG', 'Rek'];
console.log('\tHallo, mijn naam is', naam, '\b.');
//tuple:
var student;
//initialiseer tuple:
student = ['Jurson', 17, true];
var Cijfers;
(function (Cijfers) {
    Cijfers[Cijfers["Vakken"] = 0] = "Vakken";
    Cijfers[Cijfers["Cijfers"] = 1] = "Cijfers";
})(Cijfers || (Cijfers = {}));
;
console.log('\tDe vakken zijn: ', Cijfers.Vakken, '\n\tEn de cijfers: ', Cijfers.Cijfers);
