// const sum = (a, b) => a + b;

// const total = `The sum is ${sum(2, 5)}`;

// console.log(total);
// console.log(typeof total);

//----------------------------------------------//

// const greeting = `Hi, I'm John, but people call me "Johnny".`;
// console.log(greeting);

//---------------------------------------------//

// String Length & Basic Properties

const firstName = "Amr is good.";
console.log(firstName.length); // 3

console.log(firstName[0]); // A  // access certain position of the character

const firstLetter = firstName[0];
// const lastLetter = firstName[2];
const lastLetter = firstName[firstName.length - 1]; // .

console.log(firstLetter, lastLetter);

//---------------------------------------------//

// Change String Case

const mixedCaseString = "Hello! How are you?";

const lowerCaseString = mixedCaseString.toLowerCase(); // immutable method --> doesn't change the first string, rather it creates a new one

const upperCaseString = mixedCaseString.toUpperCase();

console.log(lowerCaseString);
console.log(upperCaseString);

//---------------------------------------------//

// Searching for a Substring

const hobbies = "I love HTML, CSS and JavaScript, JavaScript.";

// indexOf() --> looks for the substring in a string starting from a given position
const firstIndex = hobbies.indexOf("JavaScript"); // 21

// lastIndexOf()
const lastIndex = hobbies.lastIndexOf("JavaScript"); // 33

// includes() --> returns true or false
const includesJavaScript = hobbies.includes("JavaScript"); // true

// startsWith()
console.log(hobbies.startsWith("I")); // true

// endsWith()
console.log(hobbies.endsWith("JavaScript.")); // true

//---------------------------------------------//

// Getting a Substring

const exampleString = "hotdog";

// slice()
const hot = exampleString.slice(0, 3); // hot
const dog = exampleString.slice(3,6); // dog

//---------------------------------------------//

// Split a String

const exampleString = "The quick brown fox jumps over the lazy dog.";

// split()
// const letters = exampleString.split(''); // returns an array with every char

const letters = exampleString.split(' '); // returns every word splitted by space

//---------------------------------------------//

// Reverse, Repeat and Trim a String

// reverse a string --> cannot be used on a string, but we can once we split it into an array
const exampleString = "test"; // tset

const reversedString = exampleString.split("").reverse().join("");

console.log(reversedString);

// repeat()
const dogSays = "woof";

console.log(dogSays.repeat(5));

// trim()
const email = " contact@javascript.com  ";

console.log(email.trim()); // contact@javascript.com
