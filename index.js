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
let name = 'Alice';       //  TYPE String
let age = 2;            //    TYPE NUMBER
let price = 2.3;          // TYPE NUMBER
let isStudent = false;    // TYPE BOOLEAN
let x1;             // undefined DECLARED BUT NOT ASSIGNED A VALUE
let y1 = null;    // NULL EMPTY VALUE

//           COMPOSITE DATA TYPES
//              Objects
let person = {
    name: 'Alice',
    age: 2,
    price: 2.3,
    isStudent: false
};
//              Array
let elenco = [1, 2, 3, 4, 5];


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

// function declaration
function add(a, b) {
    return a + b;
}

// function expression
const add = function (a, b) {
    console.log(a + b);
}
// calling function
add(1, 2);

/*

    TYPE OF FUNCTION


    1) Named function
    2) IIFE (Immediately Invoked Function Expression)
    3) Arrow Function
    4) Anonymous function

 */


/*
            =================
            1 Named function
            =================
 */
const add2 = function add(a, b) {
    console.log(a + b);
}                                            // name of the function : add2
add2(1, 2);                             // use of the named function


/*
            =================
            2 IIFE (Immediately Invoked Function Expression)
            vengono eseguite immediatamente
            contains variables and private scope codes      <-- important
            =================
            sinossi:
            ( function nome(){} )():
 */
(function sayHello() {
    console.log('Hello! By IIFE');
})();

/*
            =================
            3 Arrow function
            used for short and simple functions
            =================
 */
/*        (porametri) => function body                 */
const square = (x) => x * x;        // return x*x
console.log(square(2));
/*          arrow f. senza parametri                    */

const great=()=>{console.log('great');}
great();    // usage

/*
            =================
            4 Anonymous function
            don't have a name (they are Anonymous!)
            assigned to variable (or constants)
            =================
 */
const multiply = function (a, b) {return a * b;}
// example of anonymous function with Arrow function
const multiply2 = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply2(2, 3));


