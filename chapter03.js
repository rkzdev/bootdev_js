// Comparison Operators

// < > >= <=

// strict equal operators
// compare both value and type
// === !==

// loose equal operators
// just compare the value
// == !=

const frozenStars = 5;
const tangledStars = 10;
const toyStoryStars = 7;
const encantoStars = 6;

const encantoBetterThanFrozen = encantoStars > frozenStars;
const tangledBetterThanFrozen = tangledStars > frozenStars;
const toyStoryBetterThanTangled = toyStoryStars > tangledStars;

console.log(`encantoBetterThanFrozen is a ${typeof encantoBetterThanFrozen}`);
console.log(`Encanto is better than Frozen: ${encantoBetterThanFrozen}`);

console.log(`tangledBetterThanFrozen is a ${typeof tangledBetterThanFrozen}`);
console.log(`Tangled is better than Frozen: ${tangledBetterThanFrozen}`);

console.log(
  `toyStoryBetterThanTangled is a ${typeof toyStoryBetterThanTangled}`,
);
console.log(`Toy Story is better than Tangled: ${toyStoryBetterThanTangled}`);

// IF, ELSE IF, ELSE
const height = 178;
if (height > 100) {
  console.log("You're tall!");
} else if (height > 60) {
  console.log("You're average height");
} else if (height < 50) {
  console.log("You could be taller");
} else {
  console.log("You're short");
}

const bobbyAge = 17;
const jillAge = 19;

if (bobbyAge > 18) {
  console.log("Bobby is old enough");
} else {
  console.log("Bobby is not old enough");
}

if (jillAge > 18) {
  console.log("Jill is old enough");
} else {
  console.log("Jill is not old enough");
}

// Ternary Operator
// ternary are great fro small, single-line conditionals
// use if/else otherwise
// code is writtern for humans not machines
console.log(bobbyAge > 18 ? "Bobby is old enough" : "Bobby is not old enough");
