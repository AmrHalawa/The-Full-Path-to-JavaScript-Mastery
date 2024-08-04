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

//---------------------------------------------//

// Guests Exercise

const guestList = "Our guests are: emma, jacob, isabella, ethan";

// 1. Get a length of the string. Store it in a variable called length.

const length = guestList.length;
console.log(length); // 44

// 2. Uppercase the entire string. Store the result in a variable called uppercasedGuestList.

const uppercasedGuestList = guestList.toUpperCase();

console.log(uppercasedGuestList); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

// 3. Check whether 'ETHAN' is on the uppercasedGuestList. Store the answer in a variable called isEthanOnTheList.
// The data type of the variable must be a boolean.

const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");

console.log(isEthanOnTheList); // true

// 4. Create a substring that only contains the following: 'EMMA, JACOB, ISABELLA, ETHAN'. Store the answer in a variable called substringGuests.

const substringGuests = uppercasedGuestList.slice(16);

console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'

// 5. Out of the substring you just created, create an array of names of people that are on the list. Store that array in a variable called guests.

const guests = substringGuests.split(" ");

console.log(guests); // [ 'EMMA', 'JACOB', 'ISABELLA', 'ETHAN']
