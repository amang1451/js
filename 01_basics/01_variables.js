const accounId = 144553;
let accountEmail = 'aman@google.com';
var accountPassword = "123456789";
// without using any data type we can use variable
accountCity = 'Noida';
let accountState;

// accounId = 2; not allowed
accountEmail = "ag@google.com";
accountPassword = "1456785263";
accountCity = "agra";

console.log(accounId);

console.table([accounId,accountEmail,accountCity, accountState, accountPassword]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/