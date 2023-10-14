// Delcaring variables with "LET"

// mutable
let email = "johndoe@gmail.com";
console.log(email);

// Strings
let greeting = "Hello";
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[3]);
console.log(greeting[4]);
console.log(greeting[greeting.length - 1]);

// Declaring variable with "CONST"

// immutable
const name = "Raven";
console.log(name);

// Numbers
// javascript number are just a number type
const x = 5;
const y = 5.2;
const z = -5;

// Logical Operators
// && (and)
// || (or)
// ! (not)
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!false);
console.log(!true);

// Template literals
const shadeOfRed = 101;
console.log(`the shade is ${shadeOfRed}`);

// Null Variables
// Null is not a specific string
// Null values are falsy
let profilePic = null;
console.log(typeof profilePic);

// Falsy values
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Truthy values
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean("name"));

// Undefined variables
// in a nutshell, undefined literally means that the variable was never
// assigned a value, whereas the null value must be assigned explicitly.

// empty variable
// the value of empty in this instance is undefined until we use the
// assignment operator, = to give it a value.

// if you need a nonetype value, assign the null value
// is short prefer null!
let empty;
