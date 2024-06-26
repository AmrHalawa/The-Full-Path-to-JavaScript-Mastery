// A block of code ==> Performs a task

// A function declaration (defining a function)
// function square(number) {
//   return number * number;
// }

// A function call (invoking/calling/executing a function)

// const result = square(5);

// console.log(result);

// -------------------------------------------------------------- //

// A function declaration

// function name(params) {
//   // statements
//   // have access to "this" keyword
// }

// // A function expression ==> defines anonymous function (has no name)
// const name = function (params) {
//   // statements
// };

// // An arrow function
// const name = (params) => {
//   // statements
// };

// -------------------------------------------------------------- //

// function sayHi(name) {
//   console.log(`Hi ${name}!`);
// }

// sayHi("Amr");

// every function in Javascript Returns undefined

// function add(a, b) {
//   return a + b;
// }

// const sum = add(2, 2);

// console.log(sum);

// The return variable not only returns values from a function, but it assigns them to whatever called the function!

// Another important rule of the return statement is that it stops function execution immediately.

// function test() {
//   return true;
//   return false;
// }

// test(); // true

// -------------------------------------------------------------- //

// Arrow Functions

// const square = (number) => {
//   return number * number;
// };

// const square1 = (number) => number * number;

// const result = square(10);
// const result1 = square(10);

// console.log(result);
// console.log(result1);

// -------------------------------------------------------------- //

// Parameters - used when defining a func
// Arguments - passed when making a func call

const sayHai = (firstName, age = 25) => {
  console.log(`${firstName} is ${age} years old.`);
};

sayHai("Amr", 26); // if we didn't pass an argument --> will return undefined

const add = (a = 0, b = 0) => {
  return a + b;
};

const result = add(); // if missing a number --> will return NAN

console.log(result);
