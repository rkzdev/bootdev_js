// JSON PARSING

// Javascript Object Notation, or JSON, is a standard for representing
// structured data based on JavaScript's object syntax.

// JSON is commonly used to transmit data in web apps using HTTP. The HTTP fetch()
// requests we have been using in this course have been returning Fantasy Quest
// locations, users, and items as JSON data!

// JSON SYNTAX
// JSON is just a stringified Javascript Object.
// const json = {
//   movies: [
//     {
//       id: 1,
//       genre: "Action",
//       title: "Iron Man",
//       director: "Jon Favreau",
//     },
//     {
//       id: 2,
//       genre: "Action",
//       title: "The Avengers",
//       director: "Joss Whedon",
//     },
//   ],
// };

// PARSING HTTP RESPONSES AS JSON
// JavaScript provides us with some easy tools to help us work with JSON. After
// making an HTTP request with the fetch() API, we get a Response object. That
// response object offers us some methods that help us interact with the response.
// One such method is the .json() method. The .json() method takes the response
// stream returned by a fetch request and returns a promise that resolves into
// a Javscript Object parsed from the JSON body of the HTTP response!

// const resp = await fetch(...)
// const javascriptObjectResponse = await resp.json()

// async function getLocations() {
//   const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/locations";
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//       "Content-Type": "application/json",
//     },
//   });

//   return await response.json();
// }

// // Don't touch below this line

// const apiKey = generateKey();

// const locations = await getLocations();
// console.log("Got some locations from the server.");
// for (const location of locations) {
//   console.log(
//     `- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`,
//   );
// }

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// IT'S NOT JUST USED IN JAVASCRIPT
// Just because JSON is called JavaScript Object Notation doesn't mean it's only
// used by JavaScript! JSON is a common standard that is recognized and supported
// by every major programming language.

// COMMON USE-CASES
// - In HTTP request and response bodies
// - As formats for text files .json files are often used as configuration files
// - In NoSQL databases like MongoDB, ElasticSearch and Firestore

// SENDING JSON

// JSON isn't just something we get from the server, we can also send JSON data!

// In JavaScript, two of the main methods we have access to are JSON.parse(), and
// JSON.stringify().

// JSON.STRINGIFY()
// Is particularly useful for sending JSON.

// As you many expect the JSON stringify() method does the opposite of parse. It
// takes a JavaScript object or value as input and converts it into a string. This
// is useful when we need to serialize the objects into the strings to send them
// to our server or store them in database.

// async function updateLocationById(id, locationObj) {
//   const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`;
//   const response = await fetch(path, {
//     method: "PUT",
//     mode: "cors",
//     headers: getHeaders(),
//     body: JSON.stringify(locationObj),
//   });
//   return response.json();
// }

// Don't touch below this line

// const apiKey = generateKey();
// const locationID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

// const location = await getLocationById(locationID);
// console.log(
//   `Location '${location.name}' fetched. Data: ${JSON.stringify(location)}`,
// );

// location.discovered = true;
// await updateLocationById(locationID, location);
// console.log(`Location '${location.name}' was discovered!`);

// const updatedLocation = await getLocationById(locationID);
// console.log(
//   `Location '${updatedLocation.name}' fetched. Data: ${JSON.stringify(
//     updatedLocation,
//   )}`,
// );

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// async function getLocationById(id) {
//   const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`;
//   const response = await fetch(path, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//       "Content-Type": "application/json",
//     },
//   });
//   return response.json();
// }

// function getHeaders() {
//   return {
//     "X-API-Key": apiKey,
//     "Content-Type": "application/json",
//   };
// }

// PARSING JSON

// The JSON.parse() method takes a JSON string as input and construct the javascript
// value/object described by the string. This allows us to work with the JSON as an
// object!

// const json = `{"title": "Avengers Endgame", "Rating": 4.7, "inTheaters": false}`;
// const obj = JSON.parse(json);
// console.log(obj.title);

function parseLocation(locationString) {
  try {
    const parsedLocation = JSON.parse(locationString);
    console.log(parsedLocation);
  } catch (err) {
    console.log("invalid json string");
  }
}

// don't touch below this line

function printLocationObj(parsed) {
  console.log(`id: ${parsed.id}`);
  console.log(`discovered: ${parsed.discovered}`);
  console.log(`name: ${parsed.name}`);
  console.log(`recommendedLevel: ${parsed.recommendedLevel}`);
}

parseLocation(`
  {
	  "discovered": false,
	  "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
	  "name": "Bandit Camp",
	  "recommendedLevel": 14
  }
  `);

console.log("---");

parseLocation(`
  {
	"discovered":false,
	"id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
	"name":"Irondeep",
	"recommendedLevel":6
  }
  `);
