// Functions

// The way to think about how it works is that the javascript interpreter
// reads all the code first (including function definitions), then goes back
// and starts executing the code from the beginning.

// Multiple return values is not allowed in javascript

function getLabel(numStars) {
  // if (numStars >= 8) {
  //   return "great";
  // } else if (numStars < 8 && numStars >= 4) {
  //   return "okay";
  // }
  // return "awful";

  if (numStars < 4) {
    return "awful";
  } else if (numStars >= 4 && numStars < 8) {
    return "okay";
  }
  return "great";
}

function testGetLabel() {
  for (let i = 1; i <= 10; i++) {
    console.log(`Stars=${i}, The movie was ${getLabel(i)}`);
  }
}

testGetLabel();

function isClean(review) {
  let clean = true;

  if (review.includes("dang")) {
    clean = false;
  }
  if (review.includes("shoot")) {
    clean = false;
  }
  if (review.includes("heck")) {
    clean = false;
  }

  return clean;
}

function testIsClean() {
  const reviews = [
    "avril lavigne has best dang tour",
    "what a bad film",
    "oh my heck I hated it",
    "ripoff",
    "That was a pleasure",
    "shoot! I cant say I likedit",
  ];

  reviews.forEach((review) => {
    const clean = isClean(review);
    console.log(`${review} is clean: ${clean}`);
  });
}

testIsClean();

// Functions as Values
// Functions as values or first-class functions are supported by javascript.
// That means that functions themselves can be passed around as data.

// Another name for this sort of things is "callback"
// In this case, the sayHello function is a callback function
// Callbacks are very common in front-end applications.

// When to use Callbacks
// The #1 rule of programing in my book is "KISS" Keep it simple, stupid
// What that means is regards to fancy programming tactics like callbacks
// is only use them if there isn't a simpler alternative. 95% of the time
// you won't need a callback to accomplish what you're trying to do.

function sayHello() {
  console.log("hello there!");
}

function doTwice(f) {
  f();
  f();
}

doTwice(sayHello);

function onReview(reviewText, cb) {
  console.log(`Review: ${reviewText}`);
  cb(reviewText);
}

function saveToDatabase(reviewText) {
  console.log(`Saving '${reviewText}' to database...`);
}

function main() {
  const ohBrotherWhereArtThouReview = "Stellar movie!";
  const twentyTwelveIceAgeReview = "Not my favorite";

  onReview(ohBrotherWhereArtThouReview, saveToDatabase);
  onReview(twentyTwelveIceAgeReview, saveToDatabase);
}

main();

// SCOPE

// Scope deals with where values and functions can be accessed in your code.
// Some scopes include:

// Global scope - Values in the global scope are accessible everywhere
// File or module scope - Values can only be accessed from within the same code file
// Function scope - Values can only be accessed within the same function
// Block Scope - Values can only be accessed within the {} codeblock

/**
 * @param {string} title
 * @returns {boolean}
 */
function isMovieValid(title) {
  /**
   * @param {string} title - The title of the movie
   * @returns {number}
   */
  function movieLength(title) {
    return title.length;
  }

  return movieLength(title) > 2;
}

function testIsValidMovie() {
  const movieTitles = [
    "The League of Extraordinary Gentleman",
    "Hint for Red October",
    "007",
    "",
    "12",
  ];

  for (let i = 0; i < movieTitles.length; i++) {
    const isValid = isMovieValid(movieTitles[i]);
    console.log(`'${movieTitles[i]}' is valid: ${isValid}`);
  }
}

testIsValidMovie();

// var, let and cost
// Basically var works as you would expect within function scopes, but not
// within block scopes. An "if" statement is an example of a block scope.

function printX(shouldSet) {
  if (shouldSet) {
    var x = 2;
  }
  console.log(x);
  // Prints: 2
}

// Fat Arrow Functions

// Function keyword
// const add = function(x, y) {
//   return x + y
// }

// Fat Arrow
// const add = (x, y) => {
//   return x + y
// }

// What are the differences between the two

// Fat arrow functions are always declared as variables - usually cnsts, while
// the function keyword may or may not be a variable.

// Fat arrow functions handle object scoping in a more intuitive
// A few other minor differences

/**
 * Returns the sum of x and y
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const add = (x, y) => {
  return x + y;
};
