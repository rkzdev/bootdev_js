// LOOPS

// Basic for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Assignment
// create a for loop that prints numbers 5-15
// for (let i = 5; i <= 15; i++) {
//   console.log(i);
// }

// this will cause an infinit loop
// for (let i = 10; i < 11; i--) {
//   console.log(i);
// }

// break from loops in js
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// Assignment
// Complete the movieExists function. It should loop over the entire movies array
// and print "Looking at: movie" where movie is the title in the movies array.
// Once it finds the movie title that matches the given movie argument, it should
// also print "Found: movie" where movie is the movie title.
// then it should break from the loop and not print anything else.

/**
 * Check if movie exist in the list of movies
 * @param {string[]} movies
 * @param {string} movie
 * @returns void
 */
// function movieExists(movies, movie) {
//   for (let i = 0; i < movies.length; i++) {
//     console.log(`Looking at: ${movies[i]}`);
//     if (movies[i] === movie) {
//       console.log(`Found: ${movies[i]}`);
//       break;
//     }
//   }
// }
// function testMovieExists() {
//   movieExists(["Incredibles", "Tangled", "Frozen"], "Frozen");
//   console.log("---");
//   movieExists(
//     ["The Quick and the Dead", "The Magnificent 7", "Frozen"],
//     "The Magnificent 7",
//   );
//   console.log("---");
//   movieExists(["Dead", "Alive", "Flight", "Rocky"], "Flight");
//   console.log("---");
//   movieExists(["Dead", "Alive", "Flight", "Rocky"], "None");
//   console.log("---");
// }
// testMovieExists();

// Continue in loops
// The continue keyword can be used to break out of a single iteration of a loop early.
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// Assignment
// Complete the printCleanReviews fucntion. It should loop over the entire reviews
// array and print: "Clean review: review", where review is the review text. But
// it should only do so if the review does not contain the given badWord
// use continue, do not use else statement

/**
 * @param {string[]} reviews
 * @param {string} badWord
 * @returns {void}
 */
// const printCleanReviews = (reviews, badWord) => {
//   for (let i = 0; i < reviews.length; i++) {
//     if (!reviews[i].includes(badWord)) {
//       console.log(`Clean review: ${reviews[i]}`);
//     }
//   }
// };
// const testPrintCleanReview = () => {
//   printCleanReviews(
//     ["The movie sucks", "I love it", "What garbage", "so sucky"],
//     "suck",
//   );
//   console.log("---");
//   printCleanReviews(
//     ["The movie sucks", "I love it", "What darn crap", "darn, so sucky"],
//     "darn",
//   );
//   console.log("---");
// };
// testPrintCleanReview();

// LOOP struture

// for (INIT; CONDITION; POST) {
//   // do stuff
// }

// INIT runs once at the beginning of the loop.
// CONDITION is run before execution of each iteration of the loop
// POST is evaluated at the end of each iteration.

// Assingment
// We need to render all the "star rating" options to our MovieStarz users.
// They are allowed to give rating between 1 and 10.
// Use the "decrement" operator (--) instead of the increment (++) opeartor to write
// a for loop that prints
// 10 stars -- 2 stars
// 1 star is not plural

// function movieStars() {
//   for (let i = 10; i >= 1; i--) {
//     if (i !== 1) {
//       console.log(`${i} stars`);
//       continue;
//     }
//     console.log(`${i} star`);
//   }
// }
// movieStars();

// FOR-OF LOOPS
// With newwer version of javascript we can use a clean syntax to loop over an
// array without keeping track of the index manually.

// Index-based iteration:
// let woods = ["oak", "pine", "maple"];
// for (let i = 0; i < woods.length; i++) {
//   console.log(woods[i]);
// }

// New Syntax
// let woods = ["oak", "pine", "maple"];
// for (const wood of woods) {
//   console.log(wood);
// }

// Assignment
// Let's rewrite our printCleanReviews function from earlier using a for-of loop.

/**
 * @param {string[]} reviews
 * @param {string} badWord
 * @returns {void}
 */
// const printCleanReviews = (reviews, badWord) => {
//   for (const review of reviews) {
//     if (!review.includes(badWord)) {
//       console.log(`Clean review: ${review}`);
//     }
//   }
// };
// printCleanReviews(
//   ["The movie sucks", "I love it", "What garbage", "so sucky"],
//   "suck",
// );
// console.log("---");
// printCleanReviews(
//   ["The movie sucks", "I love it", "What darn crap", "darn, so sucky"],
//   "darn",
// );
// console.log("---");
