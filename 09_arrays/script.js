// Arrays

const months = ["January", "February", "March", "April"];

console.log(typeof months); // object
console.log(months[0]); // 'January'
months[2] = "Not March"; // replace elements
months[4] = "May"; // Add an element
console.log(months); // [ 'January', 'February', 'Not March', 'April' ]
console.log(months.length); //total count of the elements

const arrayExample = ["Apple", { FirstName: "Amr" }, true, () => {}];
console.log(arrayExample);

for (let i = 0; i < months.length; i++) {
  console.log(months[i]); // loop through an array
}

// -------------------------------------- //

// Array Methods

const names = ["Jon", "Bob", "David", "Mark"];

// Array Push - Adds a new value to the end of the array.
names.push("Dean"); // doesn't return a new array, just returns the length
console.log(names);

// Array Pop - Deletes the last element of an array
names.pop();

// Array Shift - Deletes the first element of an array
names.shift();

// Array Unshift - Adds a new value to the start of an array
names.unshift("Dean");

// Array Splice - It adds/removes values from any position of an array
names.splice(2, 0, "Amr", "Johnny");

// Array Slice - Copies certain parts of an array into a newly created array
const noOneLikesJon = names.slice(1);
console.log(noOneLikesJon);

// -------------------------------------- //

// Array forEach - performs an action for each element in the array
const names = ["Jon", "Jenny", "Johnny"];

// for (let i = 0; i < names.length; i++) {
//   console.log(i, names[i]);
// }

const value = names.forEach((name, i) => console.log(name, i)); // always returns undefined values

console.log(value); // undefined

// use When
// you want to do something with each element of the array

// Don't use when
// you want to stop or break the loop when some condition is true
// you're working with async code

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// -------------------------------------- //

// Array Map --> allocates memory in order to store and return values

// The for each method also allows for a callback function that will allow you to change the original array,
// while the map method will instead return a new array while leaving the original one in its original state.

const inventory = [
  { price: 5, name: "eggs" },
  { price: 4, name: "juice" },
  { price: 3, name: "cheese" },
  { price: 5, name: "bread" },
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);

console.log(prices); //(4) [5, 4, 3, 5]
console.log(items); // (4) ['eggs', 'juice', 'cheese', 'bread']
