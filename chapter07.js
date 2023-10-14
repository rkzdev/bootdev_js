// OBJECTS

// Javascript has an Object type. Objects are single variable that can hold
// more complex information than the basic types like String, Number and Boolean,
// though they contain properties that are often those basic type.

// const apple = {
//   name: "Apple",
//   radius: 2,
//   color: "red",
// };

// Then we can access properties stored in an object using . operator
// console.log(apple.name);
// console.log(apple.radius);
// console.log(apple.color);

// Assignment
// Complete the getMovieRecord function. It takes a movie's title,
// the number of stars, and the username of the person who gave the star rating.
// It should return an object with 4 properties.
// - title
// - stars
// - username
// id
// Where the id is the title and the username concatenated together with a hyphen

/**
 * @param {string} title
 * @param {number} stars
 * @param {string} username
 * @return {{title: string, stars: number, username: string, id: string}}
 */
// function getMovieRecord(title, stars, username) {
//   return {
//     title,
//     stars,
//     username,
//     id: `${title.replaceAll(" ", "-")}-${username}`,
//   };
// }

// function logObject(obj) {
//   for (const key in obj) {
//     console.log(` -- ${key}: ${obj[key]}`);
//   }
//   console.log("---");
// }

// logObject(getMovieRecord("oh brother where art thou", 3, "wagslane"));
// logObject(getMovieRecord("frozen", 5.5, "elonmusk"));
// logObject(getMovieRecord("toy story", 4, "prince"));

// Updating and Adding Keys to Objects

// const apple = {
//   name: "Apple",
//   radius: 2,
//   color: "red",
// };
// apple.ranking = 3;
// apple.color = "green";
// console.log(apple);

// Assignment

// As it turns out, we have a bunch of old movie records in our MovieStarz database
// that never had an ID assiend in the first place! Write the addID function. It
// takes an existing movie record object and calculates the id:

/**
 * @param {{title: string, stars: number, username: string}} movie
 * @returns {{title: string, stars: number, username: string}}
 */
// function addID(movie) {
//   movie.id = `${movie.title}-${movie.username}`;
//   return movie;
// }
// console.log(addID({ title: "Frozen", stars: 8.5, username: "Elsa" }));

// Nesting Properties
// Objects can contain other objects! This means we can have properties that are
// potentially nested quite deep.

// const tournament = {
//   referee: {
//     name: "Sally",
//     age: 25,
//   },
//   prize: {
//     units: "dollars",
//     value: 100,
//   },
// };
// we access nested properties the same way: tournament.referee.name

// OPTIONAL CHAINING
// When working with nested data, it can quickly become confusing when
// you're trying to access the correct properties. When using normal . operator
// to access nested properties, if you attempt to access a filed on an object that
// doesn't exist an error will be thrown. Thankfully, Javascript has recently
// added a new operator to make dealing with this headache easier. the optional
// chaning operator: ?.

// const tournament = {
//   prize: {
//     units: "dollars",
//     value: 100,
//   },
// };

// const h = tournament.referee.height;
// TypeError: cannot read properties of undefined (reading 'height')
// console.log(h);

// Instead, we should use the optional chaining opeartor if we're unsure whether
// the referee object exists or not:
// const h = tournament.referee?.height;
// console.log(h); //h is simply undefined, no error

// Assignment
// Our MovieStarz database is pretty smart - it will only save a value if the
// value is "truthy" in javascript. If it's "falsy", it will just ignore it
// without errors.

// function getState(review) {
//   return review.author?.location?.state;
// }

// function test(review) {
//   const state = getState(review);
//   if (state) {
//     console.log(`Adding ${state} to the database...`);
//   } else {
//     console.log("No state found...");
//   }
// }

// test({
//   text: "This movie was awful",
//   stars: 2,
//   author: {
//     firstName: "Johnny",
//     lastName: "Comelately",
//     createdAt: "2022-08-17T15:41:25+00:00",
//     location: {
//       state: "Utah",
//     },
//   },
// });

// test({
//   text: "This movie was okay...",
//   stars: 5,
// });

// test({
//   text: "This movie was awful",
//   stars: 2,
//   author: {
//     firstName: "Jill",
//     lastName: "Comelately",
//     createdAt: "2022-08-17T15:41:25+00:00",
//     location: {
//       state: "Nevada",
//     },
//   },
// });

// test({
//   text: "This movie was awful",
//   stars: 2,
//   author: {
//     firstName: "George",
//     lastName: "Jimenez",
//     createdAt: "2022-08-17T15:41:25+00:00",
//   },
// });

// OBJECT METHODS

// Methods are functions that are defined on an object. They have the capability
// to access and change the properties of the object in question.
// In the context of a method, the "this" keyword refers to the object as a whole

// const person = {
//   firstName: "Lane",
//   lastName: "Wagner",
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.getFullName());

// Assignment
// Complete the getLatestReview() method. The method should return the first review
// in the user's review array.

// const user = {
//   getLatestReview() {
//     return this.reviews[this.reviews.length - 1];
//   },
//   reviews: [
//     "I hate Ice Age",
//     "I didn't enjoy it at all",
//     "What a fabulous film",
//   ],
//   name: "Bob Doogle",
// };
// console.log(`${user.name}'s latest review is: ${user.getLatestReview()}`);

// INITIALIZING KEYS
// If a key doesn't exist but we try to access it, we will get a value of undefined.
// One way we can check for this is by using the not ! operator. Because undefined
// is considered "falsy".

// const balances = {
//   lane: 100,
//   breanna: 150,
//   john: 200,
// };

// // if bob doesn't have a balance yet
// // create a new key for him with a value of 0
// if (!balances.bob) {
//   balances.bob = 0;
// }

// let days = {
//   monday: "workday",
//   wednesday: "workday",
//   saturday: "vacation",
// };

// if (!days.monday) {
//   console.log("Monday is not a day");
// }

// if (!days.sunday) {
//   console.log("Sunday is not a day");
// }

// STRINGS AS KEYS
// Just like python dictionaries, we can use a bracket notation to access the
// properties of objects, as opposed to the dot operator we have been using so far.

// const desk = {
//   wood: "maple",
//   width: 100,
// };

// console.log(desk.wood);
// console.log(desk["wood"]);

// Bracket notation is powerful, it allows us to use dynamically created strings
// as keys rather than hard-coding them as we have been doing.

// const animals = ["cat", "cat", "cat", "dog", "dog", "rat"];
// const animalCounts = {};

// for (let animal of animals) {
//   // here we initialize the count to 0 if the key doesn't exist yet
//   if (!animalCounts[animal]) {
//     animalCounts[animal] = 0;
//   }

//   animalCounts[animal]++;
// }

// console.log(animalCounts);

// Assignment
// We need to keep track of the number of reviews we've captured for all the
// movies in our database. Complete the getCountstByTitle function. It should
// return an object where each key is the title of a movie, and the value is
// how many times that movie appeared in the movies parameter

/**
 * @param {string[]} movies
 * @return {Record<string, number>}
 */
// const getCountsByTitle = (movies) => {
//   const reviews = {};
//   for (const title of movies) {
//     if (!reviews[title]) {
//       reviews[title] = 0;
//     }
//     reviews[title] += 1;
//   }

//   return reviews;
// };

// function test(movies) {
//   const counts = getCountsByTitle(movies);
//   for (const [movie, count] of Object.entries(counts)) {
//     console.log(`'${movie}' has ${count} reviews`);
//   }
//   console.log("---");
// }

// test([
//   "Ice Age",
//   "The Forgotten",
//   "The Northman",
//   "American Psycho",
//   "Ice Age",
//   "Ice Age",
//   "American Psycho",
// ]);

// test([
//   "Big Daddy",
//   "Big Daddy",
//   "The Big Short",
//   "The Big Short",
//   "The Big Short",
// ]);

// FAT ARROW FUNCTIONS AND 'THIS'
//I said we would get back to the difference between the function keyword and
// fat arrow functions and the time is now!

// Now that we've talked about how this is bound to the instance of the current
// object we can understant a bit more about fat arrow functions. First, let's
// acknowledge something interesting; In JavaScript, the 'this' keyword is
// practically always accessible.

// WHEN YOU ARE NOT USING FAT ARROWS
// - If you're in an object, this is bount to that object
// - If you're in the global, or "top-level" scope, this is bound tto the "global" object

// FAT ARROW FUNCTIONS PRESERVE 'THIS'
// const author = {
//   firstName: "Lane",
//   lastName: "Wagner",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(author.getName());

// const author = {
//   fistName: "Lane",
//   lastName: "Wagner",
//   getName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(author.getName());
// Prints: undefined undefined
// because the parent scope (the scope outside of the author object)
// never defined .firstName and .lastName propeties

// So, the big takeaway is thatt when you use the non-fat-arrow function syntax,
// you sometimes get a different this object, depending on how the function (or
// method was defined and called)

// With a fat-arrow function, the this keyword will always refer to the same object
// that its parent scope would. In essence, fat arrow functions "preserve" the this
// context. for that reason, some developers and frameworks prefer fat arrow functions
// in may situations. It can alleviate some confusion around the this object.
