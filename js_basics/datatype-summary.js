//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol(unique value), BigInt

const score = 100
const scoreValue = 100.3

//  console.log(scoreValue)
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
// console.log(typeof id);
console.log(anotherId);


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "rutu",
    age: 25,
    gender:"female"
}
 console.log(myObj);
 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3