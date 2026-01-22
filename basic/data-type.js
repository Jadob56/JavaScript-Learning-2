//Primitive Data Types
const userName = "jadob"; // string
const userAge = 25; // number
let isMember = false; // boolean
const userID = null; // null
let password; // undefined
let uniqueID = Symbol("id"); // symbol
const bigNumber = 12345678901234567890n; // bigint

console.table([
  typeof userName,
  typeof userAge,
  typeof isMember,
  typeof userID,
  typeof password,
  typeof uniqueID,
  typeof bigNumber
]);

//Non-Primitive Data Types                  
const hobbies = ['reading', 'coding', 'gaming']; // array
const user = { // object
  firstName: "jadob",
  lastName: "shikder",
  age: 25
};
const greet = function() { // function
  console.log("hello jadob");
};

console.log(typeof hobbies);
console.log(typeof user);
console.log(typeof greet);
console.log(typeof uniqueID);       
