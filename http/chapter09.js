// URL PATHS
// The URL path comes right after the domain (or port if one is provided)
// in the URL string.

// In this URL, the path is /root/next:
// http://testdomain.com/root/next

// WHAT PATHS MEANT IN THE EARLY INTERNET
// In the early days of the internet, and sometimes still today, many web servers
// simply served raw files from the server's file system.

// If i had a file in my local /documents/hello.txt, you could access it by making
// GET request to http://example.com/documents/hello.txt

// HOW PATHS ARE USED TODAY
// Most modern web servers don't use that simple mapping of URL path -> file path.
// Technically, a URL path is just a string that the web server can do what it wants
// with, and modern websites take advantages of that flexibility. Some common examples
// of what paths are used for include:

// The hierarchy of pages on a website, whether or not that reflects a server's file structure
// Parameters being passed into an HTTP request, like an ID of a resource
// The version of the API
// The type of resource being requested

// RESTFUL APIS
// Representational State Transfer, or REST, is a popular convention that HTTP servers
// follow. Not all HTTP APIs are "REST APIs", or "RESTful", but it is very common.

// RESTful servers follow a loose set of rules that make it easy to build reliable
// and predictable web APIs. REST is more or less a set of conventions about how
// HTTP should be used.

// SEPARATE AND AGNOSTIC
// The big idea behind REST is that resources are transferred via well-recognized,
// language-agnostic client/server interactions.
// A RESTful style means the implementation of the client and server can be done
// independently of one another, as long as some simple standards, like the names
// of the available resources, have been established.

// STATELESS
// A RESTful architecture is stateless, which means the server does not need to
// know what state the client is in, nor does the client need to know what state
// the server is in. Statelessness in REST is enforced by interactingg with resources
// instead of commands. Keep in mind, this doesn't mean the applications are stateless
// on the contratry, what would "updating a resource" even mean if the server wasn't
// keeping track of its tate?

// PATHS IN REST

// In a RESTful API, the last section of the path of a URL should specify which resource is being accessed. Then, as we talked about in the "methods" chapter, depending on whether the request is a GET, POST, PUT or DELETE, the resource is read, created, updated, or deleted.

// The Fantasy Quest API we have been working with is a RESTful API! Take a look at the URLs we've been using:

// https://api.boot.dev/v1/courses_rest_api/learn-http/locations
// https://api.boot.dev/v1/courses_rest_api/learn-http/users
// https://api.boot.dev/v1/courses_rest_api/learn-http/items

// The first part of the path specifies the version. In this case, version 1, or v1.

// The second part of the path tells our server that this is a REST API for the "learn http" course.

// Finally, the last part denotes which resource is being accessed, be it a location, user, or item.

// URL QUERY PARAMETERS
// A URL's query parameters appears next in the URL structure but are not always
// present they're optional. For example:

// https://www.google.com/search?q=boot.dev

// q=boot.dev is a query parameter. Like headers, query parameters are key / value
// pairts. In this case, q is the key and boot.dev is the value.

// async function getUsers(url, apiKey) {
//   const fullURL = `${url}?sort=level`;
//   const response = await fetch(fullURL, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//     },
//   });
//   return response.json();
// }

// const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

// const apiKey = generateKey();

// const users = await getUsers(baseURL, apiKey);
// for (const user of users) {
//   console.log(
//     `got user with name: ${user.characterName}, and level: ${user.level}`,
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

// MULTIPLE QUERY PARAMETERS

// We mentioned that query parameters are key/value pairs - that means we can have
// multiple pairs!

// http://example.com?firstName=lane&lastName=wagner
// In the example abouve:
// firstName = lane
// lastName = wagner
// The ? separates the query parameters from the rest of the URL. The & is then
// used to separte every pair of query parameters after that.

// async function lootTreasure(baseURL, chestRarity) {
//   let limit = 1;

//   if (chestRarity === "Rare") {
//     limit = 3;
//   }

//   if (chestRarity === "Legendary") {
//     limit = 5;
//   }

//   const fullURL = `${baseURL}?sort=quality&limit=${limit}`;
//   return await getItems(fullURL, apiKey);
// }

// const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";
// const apiKey = generateKey();

// const commonLoot = await lootTreasure(url, "Common");
// console.log("Looting common treasure chest...");
// for (const item of commonLoot) {
//   console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
// }
// console.log("---");

// const rareLoot = await lootTreasure(url, "Rare");
// console.log("Looting rare treasure chest...");
// for (const item of rareLoot) {
//   console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
// }
// console.log("---");

// console.log("Looting legendary treasure chest...");
// const legendaryLoot = await lootTreasure(url, "Legendary");
// for (const item of legendaryLoot) {
//   console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
// }

// async function getItems(url, apiKey) {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//     },
//   });
//   return response.json();
// }

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }
