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
