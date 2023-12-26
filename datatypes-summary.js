// Primitive -> call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol(use to define unique value used in advance js for front-end), BigInt
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id)
console.log(anotherId)
console.log(id === anotherId); // false because symbol always create unique values
const bigNumber = 626n; //n after number assign in datatype bigint
console.log(typeof bigNumber);


// Reference type -> Non primitive
// Array, Objects, Functions

const heroes = ['shaktiman', 'naagraaj', 'doga'];
let myObj = {
    name: "Aman",
    age: 22
}
console.log(myObj);
console.log(typeof myObj);
console.log(heroes);
console.log(typeof heroes);

const myfunction = function(){
    console.log("Hello world!");
}

console.log(myfunction);
console.log(typeof myfunction);
myfunction();

// documentation link :- https://262.ecma-international.org/5.1/#sec-11.4.3