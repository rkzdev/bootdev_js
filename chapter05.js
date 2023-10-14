// ARRAYS

const nubmers = [1, 2, 3, 4, 5];

// INdex into a list
const strings = ["banana", "apple", "pear"];
console.log(strings[0]);

// Pust to a list
const drinks = [];
drinks.push("lemonade");
console.log(drinks);
drinks.push("root beer");
console.log(drinks);

function logArray(list) {
  console.log("logging array....");
  for (const a of list) {
    console.log(` - ${a}`);
  }
}

// const movies = [];
// movies.push("the dark knight");
// logArray(movies);
// movies.push("the notebook");
// logArray(movies);
// console.log(movies[0]);

// ARRAYS LENGTH
// T/he .length property returns the current length of an array.
const foods = ["burger", "fries", "pizza"];
console.log(foods.length);

// Assignment
//Complete the getMostRecentUser function. If the usernames array is empty,
// it should return null. Otherwise, it should return the last username in the array.
//The goal here is to find the user who signed up to MovieStarz most recently!

/**
 * Return the last item in array | null
 * @param {string[]} usernames
 * @returns {null | string}
 */
const getMostRecentUser = (usernames) => {
  if (usernames.length < 1) {
    return null;
  }

  return usernames[usernames.length - 1];
};

console.log(`Most recent user: ${getMostRecentUser([])}`);

console.log(
  `Most recent user: ${getMostRecentUser(["johndoe123", "billyrae456"])}`,
);

console.log(
  `Most recent user: ${getMostRecentUser([
    "wagslane",
    "jimmyjohn",
    "bopeep",
    "strightkilla",
    "reddyman",
  ])}`,
);

// ARRAYS OPERATIONS - CONCATENATE

// The .concat method
// let nums = [1, 2, 3];
// nums = nums.concat([4, 5, 6]);
// console.log(nums);
// Prints: [1, 2, 3, 4, 5, 6]

// The "..." operator
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5, 6];
console.log(newNums);
// Prints: [1, 2, 3, 4, 5, 6]

// Assignment
// Complete the uploadNewMovies function. It accepts the oldMovies array,
// which is the database of movies already in the MovieStarz system,
// and a newMovies array, which are the new movies we need to add to the system.

// It should return a new array containing all the movies from both arrays.First the old, then the new.

/**
 * @param {string[]} oldMovies
 * @param {string[]} newMovies
 * @returns {string[]}
 */
const uploadNewMovies = (oldMovies, newMovies) => {
  return [...oldMovies, ...newMovies];
};

const oldMovies = ["Once Upon a Time", "Django Unchained", "The Hateful 8"];
const newMovies = ["Inglorious Basterds"];
const allMovies = uploadNewMovies(oldMovies, newMovies);

console.log("All movies database:");
logArray(allMovies);

// ARRAY OPERATIONS - INCLUDES

const fruits = ["apple", "orange", "banana"];
console.log(fruits.includes("orange"));

// Assignment
//Let's fix up our profanity detection to make it a little more robust.
//Rather than just marking a review as "clean" or "not clean" we need to give it a ranking,
// which we'll represent as one of 3 strings:

// clean: No bad words
// dirty: 1 bad word
// filthy: 2 or more different bad words

// The bad words are:

// dang
// shoot
// heck

// Complete the getCleanRank function. If a word contains punctuation, it should escape detection in our naive algorithm for now.

/**
 * @param {string[]} reviewWords
 * @returns string
 */
function getCleanRank(reviewWords) {
  let rank = "clean";
  let badWordsCount = 0;
  const badWords = ["dang", "shoot", "heck"];

  for (const word of reviewWords) {
    if (badWords.includes(word)) {
      badWordsCount++;
    }
  }

  if (badWordsCount == 1) {
    rank = "dirty";
  }

  if (badWordsCount >= 2) {
    rank = "filthy";
  }

  return rank;
}

function testGetCleanRank() {
  const testCases = [
    ["avril", "lavigne", "has", "best", "dang", "tour"],
    ["what", "a", "bad", "film"],
    ["oh", "my", "heck", "I", "hated", "it"],
    ["ripoff"],
    ["That", "was", "a", "pleasure"],
    ["shoot!", "I", "cant", "say", "I", "liked", "the", "dang", "thing"],
    ["shoot", "dang", "heck"],
  ];

  for (const reviewWords of testCases) {
    const cleanRank = getCleanRank(reviewWords);
    console.log(`'${reviewWords}' has rank: ${cleanRank}`);
  }
}

testGetCleanRank();

// SLICING ARRAYS

// The syntax is as follows: slice(fromIndex, untilIndex)

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)); // ['camel', 'duck']
console.log(animals.slice(1, 5)); // ['bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(-2)); // ['duck', 'elephant']
console.log(animals.slice(2, -1)); // ['camel', 'duck']
console.log(animals.slice()); // ['ant', 'bison', 'camel', 'duck', 'elephantt']

const movies = [
  "oh brother where art thou",
  "oceans eleven",
  "fight club",
  "the island",
  "shutter island",
  "the magnificent seven",
];

logArray(movies.slice(2));
logArray(movies.slice(0, -3));

// MODIFYING CONST ARRAYS
// It's important to note that const arrays can still be modified, they just
// can't be reassgined

const demos = [];
// this works
demos.push("javascript");

// this breaks
demos = ["root beer"];
