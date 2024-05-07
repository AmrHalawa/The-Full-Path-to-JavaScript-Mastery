// const a = 5;
// const b = 10;

// let result = 0;

// Addition
// result = a + b;

// Subtraction
// result = a - b;

// Multiplication
// result = a * b;

// Division
// result = a / b;

// Exponent
// result = b ** a;

// Modulo
// when you divide 13 by 12
// the reminder is 1
// result = a % b;

// Increment Decrement
// result++;
// result--;

// console.log(result);

// ----------------------------- //

// Comparison operators ==> true/false
// < > ==

// const a = 5;
// const b = 10;

// we can test whether a value is greater than the other value
// console.log(a > b);
// we can also test whether a value is greater than or equal to the other value
// console.log(a >= b);
// looks like I have a font installed so for me, it's going to look like one sign,
// but it's two. The greater than sign, and then immediately the equality sign.

// we can test whether a value is less than the other value
// console.log(a < b);
// we can also test whether a value is less than or equal to the other value
// console.log(a <= b);

// finally, we have the equality operators,
// we can test whether a value is equal
// console.log(a == b);
// we also test whether a value is not equal
// console.log(a != b);

// what you're going to see more often are going to be the strict equality
// and strict inequality operators. They look like this.

// strict equal, strict not equal
// console.log(a === b);
// console.log(a !== b);

// ----------------------------- //

// Strict vs Loose Equality

// Strict Equality
// Compares Values and Data Types
// return true only if both are the same
//The strict equality method of comparison is a preferred option to use because it’s behavior can be easily predicted, which leads to less bugs and unexpected results. The JavaScript interpreter compares the values as well as their types and only returns true when both are the same.
// console.log(5 == "5");

// Loose Equality
//The loose equality doesn’t compare the data types.
//You should almost never use the loose equality.
// console.log("Hello" === "Hello");

// The Good ones: === !===
// The Evil Twins: == !==

// "" == "0"; // false
// 0 == ""; // true
// 0 == "0"; // true

// false == "false"; // false
// false == "0"; // true

// false == undefined; // false
// false == null; // false
// null == undefined; // true

// https://dorey.github.io/JavaScript-Equality-Table/

// ----------------------------- //

// Logical Operators
// AND && ==> All operands are true ==> TRUE
// console.log(true && true && true);
// OR || ==> At least one operand is true ==> TRUE
// console.log(true || true);
// NOT !
// console.log(!true);

// ----------------------------- //

// Assignment Operators

// let number = 5;

// number += 5; // number = number + 5;
// number -= 5; // number = number - 5;
// number *= 5; // number = number * 5;
// number /= 5; // number = number / 5;

// let string = "Hello";
// string += ", I am Amr!";

// console.log(string);

// ----------------------------- //
