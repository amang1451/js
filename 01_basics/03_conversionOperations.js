let score =  "23ac"

// console.log(typeof score);
// console.log(typeof(score))

let valueInNumber =  Number(score)
// console.log(valueInNumber)
// console.log(typeof(valueInNumber))

// "33" => 33 (Number)
// "33abc" =>  NaN (Number)
// null => 0 (Number)
// undefined => undefined 
// true => 1 (Number)

let isLoggedIn = 3
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

// other than 0 => true (boolean)
// "" => false
// "dm" => true
// null => false
// undeined => false


let someNumber = 32
let stringSomeNumber = Number(someNumber)
// console.log(stringSomeNumber)
// console.log(typeof stringSomeNumber)

// -------------operations-----------------

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**3) // 2 is to power 3

// let str1 = "Hello"
// let str2 = " Aman"
// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1");

// console.log(true);
// console.log(+true); //equal to 1
// console.log(+"")

let num1, num2, num3;
num1 = num2 = num3 = 2+1;

let gameCounter = 100
// console.log(++gameCounter);
// console.log(gameCounter++);

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" 
//  the increment operator increments and returns the value before incrementing. in postfix

let a = 3;
const b = ++a;
// he increment operator increments and returns the value after incrementing. in prefix

// console.log(`a:${a}, b:${b}`);
