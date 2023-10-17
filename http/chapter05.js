// ERROR HANDLING IN JAVASCRIPT

// When something goes wrong while a program is running, Javascript uses the
// try/catch paradigm for handling those errors. try/catch is fairly common,
// python use a similar mechanism.

// FIRST, AN ERROR IS THROWN
// For example, let's say we try to access a property on an undefined variable.
// javascript will automatically "throw" an error.

// the code crashes with the following error:
// "ReferenceError: car is not defined"
// const speed = car.speed;

// TRYING AND CATCHING ERRORS
// By wrapping that code in a try/catch block, we can handle the case where car
// is not yet defined.
// try {
//   const speed = car.speed;
// } catch (err) {
//   console.log(`An error was thrown: ${err}`);
// }

// HANDLING A NEW ERROR OBJECT
// When handling a thrown Error object, you must access the message property
// of the error object to display it correctly to the console
// try {
//   // computattion
//   const sum = 1 / 0;
//   throw new Error("a number cannot be divided by zero");
// } catch (err) {
//   console.log(`An error was thrown. ${err.message}`);
// }

// try {
//   printCharacterStats(4);
//   printCharacterStats("ten");
//   printCharacterStats(10);
// } catch (err) {
//   console.log(err.message);
// }

// function printCharacterStats(level) {
//   if (isNaN(level)) {
//     throw new Error("Parameter is not a number!");
//   }
//   console.log(`Your character is level ${level}!`);
// }

// BUGS VS ERRORS
// Error handling via try/catch is not the same as debugging. Likewise, errors
// are not the same as bugs.
// - Good code with no bugs can still produce errors that are gracefully handled
// - Bugs are, by definition, bits of code that aren't working as intended

// DEBUGGING
// "Debugging" a program is the process of going through your code to find where
// it is not behaving. Debugging is a manual process performed by the developer.
// Sometimes developer use special software called a "debugger" to help them find
// bugs, but often they just use console.log() statements to figure out what's goin in.

// Examples of debugging:
// - Adding a missing parameter to a function call
// - Updating a broken URL that an HTTP call was trying to reach
// - Fixing a date-picker component in an app that wasn't displaying properly

// ERROR HANDLING
// "Error handling" is code that can handle expected edge cases in your program.
// Error handling is an automated process that we design into our production code
// to protect it from things like weak internet connections, bad user input, or bugs
// in other people's code that we have to interface with.

// Examples of error handling:
// - Using a try/catch block to detect an issue with user input
// - Using a ttry/catch block to gracefully fail when no internet connection is available

// ASYNC/AWAIT MAKES ERROR HANDLING EASIER
// try and catch are the standard way to handle errors in javascript, the trouble is,
// the original Promise API with .then didn't allow us to make use of try and catch blocks

// Luckily, the async and await keywords do allow it, yet another reason to prefer
// the newer syntax.

// .CATCH() CALLBACK ON PROMISES
// The .catch() method works similarly to the .then() method, but it fires
// when a promise is rejected instead of resolved.

// EXAMPLE WITH .THEN AND .CATCH CALLBACKS
// fetchUser()
//   .then(function(user) {
//     console.log(`user fetched: ${user}`);
//   })
//   .catch(function(err) {
//     console.log(`an error was thrown: ${err}`);
//   });

// EXAMPLE OF AWATING A PROMISE
// try {
//   const user = await fetchUser();
//   console.log(`user fetched: ${user}`);
// } catch (err) {
//   console.log(`an error was thrown: ${err}`);
// }

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}

try {
  const leaderboard = await fetchLeaderBoard();
  console.log(leaderboard);
} catch (err) {
  console.log(`an error was thrown: ${err}`);
}
