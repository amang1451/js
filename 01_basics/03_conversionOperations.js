let score =  "23ac"

console.log(typeof score);
console.log(typeof(score))

let valueInNumber =  Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))

// "33" => 33 (Number)
// "33abc" =>  NaN (Number)
// null => 0 (Number)
// undefined => undefined 
// true => 1 (Number)

let isLoggedIn = 3
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// other than 0 => true (boolean)
// "" => false
// "dm" => true
// null => false
// undeined => false


let someNumber = 32
let stringSomeNumber = Number(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)