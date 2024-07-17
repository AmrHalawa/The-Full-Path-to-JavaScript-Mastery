// Global Scope
/*
let firstName = "Amr";

const logName = () => {
  console.log(firstName); // Amr
  firstName = "John";
};

logName();
console.log(firstName); // John
*/

// Local Scope / Function Scope
// Block Scope

// ---------------------------------------- //

// Hoisting in JavaScript
// Brining the variables to the top of scope

// var age = 20;
// console.log(age); // undefined

// var age;
// console.log(age); // undefined
// age = 20;

// ---------------------------------------- //

// Closures
// because of closures we have access of variables of parent scope
// gives you access to the outer function scope from an inner function

/*
const outer = () => {
  const outerVar = "Hello!";

  const inner = () => {
    const innerVar = "Hi!";

    console.log(outerVar, innerVar);
  };

  return inner;
};

const innerFn = outer();

innerFn(); // Hello! Hi!
*/

/*

*/

const init = () => {
  const hobby = "Learning JavaScript"; // Local variable created by init func

  const displayHobby = () => { //dsplayHobby is the inner function, a closure
    console.log(hobby); // using a variable created in the parent function
  };

  return displayHobby();
};

const myFunc = init();

myFunc();
