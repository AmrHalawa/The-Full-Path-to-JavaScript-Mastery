// if statement

// const age = 18;

// if (age > 18) {
//   console.log("You may enter!");
// } else if (age === 18) {
//   console.log("You just turned 18, Welcome!");
// } else {
//   console.log("Grow up!");
// }

//---------------------------------------//

// Truthy & Falsy Values

// if (1) {
//   console.log("In Here");
// } else {
//   console.log("No, In here");
// }

// FALSY VALUES ==> false

// false
// 0 (zero)
// "", '', `` (empty strings)
// null
// undefined
// NaN (not a number)

// note : Empty array ([]) is not falsy

// TRUTHY VALUES ==> true

// Everything that is not FALSY
// true
// 1
// "hello"
// 58
// {} (empty object)
// [] (empty array)

//---------------------------------------//

// Logical Operators Part 2

// console.log("truthy" && 1 && "test" && 999); // 999

// console.log("truthy" && 0 && "test" && 999); // 0

// console.log("truthy" || 1 || "test" || 999); // truthy

// console.log("" || 0 || null || undefined); // undefined

// A double NOT !! is sometimes used for converting a value to boolean type:

// alert(!!"truthy"); // true
// alert(!!null); // false

//---------------------------------------//

// Switch statement

// const superHero = "Captain America";

// switch (superHero) {
//   case "Iron Man":
//     console.log("I am Iron Man...");
//     break;
//   case "Thor":
//     console.log("That is my hammer!");
//     break;
//   case "Captain America":
//     console.log("Nerver give up. ");
//     break;
//   case "Black Widow":
//     console.log("One shot, one kill.");
//     break;
//   default:
//     console.log("Enter a valid superhero name");
//     break;
// }

//---------------------------------------//

// Ternary Operator

// if (condition) {
//    block of code if true
// 	value if true;
// } else {
//    block of code if false
// 	value if false;
// }

// condition ? value if true : value if false

// const age = 18;
// if (age > 18) {
//   console.log("You can drive.");
// } else {
//   console.log("You can't drive yet.");
// }

// const age = 18;
// age <= 17 ? console.log("You can drive.") : console.log("You can't drive yet.");

//---------------------------------------//

// Looping - While and For Loops

// DRY 
// DO NOT REPEAT YOURSELF

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);


// The 'While' loop

// let i = 0;

// while (i < 10) {
//   console.log(i);
//     i++;
// }


// The for loop

// for ([initialization]; [condition]; [final - expression]) {
//   statement;
// }

// for (let i = 0; i < 10; i++){
//   console.log(i);
// }

//---------------------------------------//
