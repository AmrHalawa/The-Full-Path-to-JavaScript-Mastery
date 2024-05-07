// Creating a variable using var keyword
// var variableName = "test";

// Creating a variable using let keyword
// let variableName = "test";

// Creating a variable using const keyword
const variableName = "test";

console.log(variableName);

// Single Line Comment
// This is a Single Line Comment

// Multi Line Comment
/*
    This
    is
    a
    Multi
    Line
    Comment
*/

// String --> is a data type used to represent text.

const singleQuotes = "Hello, everyone!";
const doubleQuotes = "Hello, everyone!!";

// const name = "Amr";
const backticks = `Hello, ${name}, welcome !!!`; // for extended functionality

// console.log(backticks);
// console.log(typeof backticks);

// Numbers

const wholeNumber = 5;
const decimalNumber = 0.5;

// console.log(wholeNumber, decimalNumber);

// Booleans

/*
const age = 20;

if (age >= 18) {
  console.log("You may enter");
}
*/

// True - yes, correct, 1
// False - no, incorrect, 0

// Null

// let age = null; // nothing - empty - value unknown
// age = 20;
// console.log(age);

// Undefined --> A variable that has not been assigned a value is undefined.
// undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.

// Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

// Unassigned variables are initialized by JavaScript with a default value of undefined. JavaScript never sets a value to null. That must be done programmatically.

let x;

// Objects (stores collection of data)

const person = {
  name: "Amr",
  age: 25,
};

//Dot notion
console.log(typeof person.name);

// Other objects
// Array (to store ordered data collections)
const arr = [1, 2, 3, 4];
console.log(arr);

// Date Object

const date = new Date();
console.log(date);

// Statically typed

// Statically typed language where each variable and expression type is already known at compile time. Once a variable is declared to be of a certain data type, it cannot hold values of other data types. Example: C, C++, Java.

// Dynamically typed

// Dynamically typed languages can receive different data types over time. JavaScript is dynamically typed; variables in JavaScript can receive different data types over time. We're going to see this in action really soon.
