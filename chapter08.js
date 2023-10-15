// ERRORS IN JAVASCRIPT

// The fundamentals of error handling in javascript and python are similar.
// However, instead of being called Exceptions, they're just called Errors.

// Javascript uses a try-catch pattern for handling errors.

try {
  const car = {};
  console.log(car.make.name);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("I will always run");
}

// - The try block is executetd until an error is thrown or it completes,
// whichever happens first.
// - The catttch block is only executed if an error is raised in the try block.
// It then exposes the error as an error objectt (err in our case) so that the
// program can handle the error gracefully without crashing.
// - The finally block will always run, regardless of whether or not an error
// was thrown

// FINALLY IS NOT AS COMMON

// The finally block is optional, and personally, I rarely use itt. If you want
// something to run regardless of a thrown in try block, you can usually just
// put if after the try/catch block.

// THE ERROR OBJECT
// The error objectt has two useful properties:
// - name
// - message

// Most of the time, you're going to want to do somethting with the message, like
// log it to the console.

// THROWING YOUR OWN ERRORS

// Errors are not something to be scared of. When something in our own code
// happens that we don't expect, we should throw an error.

// SYNTAX
// throw new Error("something went wrong");

// It's worth mentioning that in javascript you can throw primitive values as well,
// like a string

// throw "something went wrong"; // not recommended

// THROWING ERRORS REVIEW
// Software applciation aren't perfect, and user input and network connectivity are
// far from predictable. It's your job to catch and handle any and all errors gracefully
// so that your application performs as expected. When you are able to detect that
// something is amiss, you should be throwing the errors yourself, in addtion to
// the default errors that the javascript interpreter will throw.
