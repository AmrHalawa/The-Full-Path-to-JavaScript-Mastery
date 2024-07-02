// Global Scope
let firstName = "Amr";

const logName = () => {
  console.log(firstName); // Amr
  firstName = "John";
};

logName();
console.log(firstName); // John

// Local Scope / Function Scope
// Block Scope
