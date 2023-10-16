// SYNCHRONOUS VS ASYNCHRONOUS

// All of the earlier courses on Boot.dev only had synchronous code, which means
// code that runs in sequence. Each line of code executes in order, one after the
// next.

// Asynchronous or async code runs in parallel. That means code further down
// runs at the same time that a previous line of code is still running. A good
// way to visualize this is with the javascript function setTimeout().

// const craftingCompleteWait = 400;
// const combiningMaterialsWait = 200;
// const smeltingIronBarsWait = 100;
// const shapingIronWait = 300;

// // Don't touch below this line

// setTimeout(() => console.log("Iron Longsword Complete!"), craftingCompleteWait);
// setTimeout(() => console.log("Combining Materials..."), combiningMaterialsWait);
// setTimeout(() => console.log("Smelting Iron Bars..."), smeltingIronBarsWait);
// setTimeout(() => console.log("Shaping Iron..."), shapingIronWait);

// console.log("Firing up the forge...");

// await sleep(2500);
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// PROMISE IN JAVASCRIPT
// A Promise in Javascript is very similar to making a promise in the real world.
// When we make a promise we are making a commitment to something. For example
// I promise to explain Javascript promise to you, my promise to you has 2 potential
// outcomes: it is either fulfilled, meaning i eventually explained promise to you,
// or it is rejected meaning i failed to keep my promise.

// The Promise Object represents the eventual fulfillment or rejection of our
// promise and holds the resulting values. In the meantime, while we're waiting
// for the promise to be fulfilled, our code continues executing. Promises are
// the most popular modern way to write asynchronous code in javascript.

// DECLARING A PROMISE

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (getRandomBool()) {
//       resolve("resolved!");
//     } else {
//       reject("rejected");
//     }
//   }, 1000);
// });

// promise.then((result) => console.log(result)).catch((err) => console.log(err));

// function getRandomBool() {
//   return Math.random() < 0.5;
// }

// const applyDamage = (damage, currentHP) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (damage < currentHP) {
//         resolve(
//           `The player suffers ${damage} points of damage and has ${currentHP - damage
//           } hit points remaning`,
//         );
//       } else {
//         reject(
//           `The player suffers ${damage} points of damage and has fallen unconscious`,
//         );
//       }
//     }, 1000);
//   });
// };

// function runApplyDamageTest(damage, currentHP) {
//   console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
//   applyDamage(damage, currentHP)
//     .then((message) => {
//       console.log(`...applyDamage resolved with: ${message}`);
//     })
//     .catch((message) => {
//       console.log(`...applyDamage rejected with: ${message}`);
//     });
// }

// runApplyDamageTest(27, 50);
// await sleep(1100);
// runApplyDamageTest(50, 50);
// await sleep(1100);
// runApplyDamageTest(110, 100);
// await sleep(1100);

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// WHY ARE PROMISES USEFUL?
// Promises are the cleanest (but not the only) way to handle the common
// scenario where we need to make requests to a server, which is typically done
// via an HTTP request. In fact, the fetch() function we were using earlier in
// the course returns a promise!

// I/O, OR "INPUT/OUTPUT"
// Almost every time you use a promise in JavaScript it will be to handle some
// form of I/O. I/O, or input/output, refers to when our code needs to interact
// with system outside of the (relatively) simple world of local variables and
// functions.

// Common examples of I/O include:
// HTTP requests
// Reading files from the hard drive
// Interacting with a Bluetooth device

// Promises helps us perform I/O without forcing our entire program to freeze up
// while we wait for a response.

// PROMISE AND THE AWAIT KEYWORD
// We have used to await keyword a few times in this course, it's time we
// finally understand what's going on under the hood.

// The await keyword is used to wait for a Promise to resolve. Once it has been
// resolved, the await expression returns the value of the resolved promise.
// const message = await applyDamage(20, 50);

// console.log(message);

// function applyDamage(damage, currentHP) {
//   return new Promise((resolve) => {
//     const newHP = currentHP - damage;
//     setTimeout(() => {
//       resolve(
//         `The player with ${currentHP} hit points suffer ${damage} points of damage and has ${newHP} hit points remaining`,
//       );
//     }, 1000);
//   });
// }

// THE ASYNC KEYWORD
// While the await keyword can be used in place of .then() to resolve a promise,
// the async keyword can be used in place of new Promise() to create a new promise.

// When a function is prefixed with the asyn keyword, it will automatically return
// a Promise. That promise resolves with the value that your code returns from the
// function. You can think of async as "wrapping" your function within a promise.

// These are equivalent:
// function fetchDataFromServer() {
//   return new Promise((resolve) => resolve("users data"));
// }

// new Promise()
// function getPromiseForUserData() {
//   return new Promise((resolve) => {
//     fetchDataFromServer().then((user) => resolve(user));
//   });
// }
// console.log(await getPromiseForUserData());

// Async
// async function getPromiseForUserData() {
//   const user = await fetchDataFromServer();
//   return user;
// }
// console.log(await getPromiseForUserData());

function fetchTheUser() {
  return new Promise((resolve) => {
    resolve("raven");
  });
}

function fetchLocationForUser(user) {
  return new Promise((resolve) => {
    if (user == "raven") {
      resolve("pampanga");
    }
  });
}

function fetchServerForLocation(location) {
  return new Promise((resolve) => {
    if (location == "pampanga") {
      resolve("asia");
    }
  });
}

const fetchUser = fetchTheUser();

fetchUser
  .then(function(user) {
    console.log(user);
    return fetchLocationForUser(user);
  })
  .then(function(location) {
    console.log(location);
    return fetchServerForLocation(location);
  })
  .then(function(server) {
    console.log(`The server is in ${server}`);
  });

const user = await fetchTheUser();
const location = await fetchLocationForUser(user);
const server = await fetchServerForLocation(location);
console.log(`The server is in ${server}`);
