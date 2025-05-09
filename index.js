console.log('Happy developing ✨')

function example() {
    if (true) {
        var x = 10; // var function level scope
    }
    console.log(x);
}

example();
//console.log(x); // da errore perchè esterno alla funzione

/*
    let block level scope
 */
{
    let y = 20;
    console.log(y);
}
//console.log(y); // da errore perchè esterno al blocco

const autore = "Pinco pallino";
console.log(autore);
   // const block level scope

//          PRIMITIVE TYPE
let name='Alice';       //  TYPE String
let age=2;            //    TYPE NUMBER
let price=2.3;          // TYPE NUMBER
let isStudent=false;    // TYPE BOOLEAN
let x1;             // undefined DECLARED BUT NOT ASSIGNED A VALUE
let y1=null;    // NULL EMPTY VALUE

//           COMPOSITE DATA TYPES
//              Objects
let person={
    name:'Alice',
    age:2,
    price:2.3,
    isStudent:false
};
//              Array
let elenco=[1,2,3,4,5];


// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}