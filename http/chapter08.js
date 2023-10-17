// HTTP METHODS - GET
// HTTP defines a set of methods that we use every time we make a request.

// THE GET METHOD
// The GET method is used to 'get' a representation of a specified resource. You
// are not taking the data away from the server, but rather getting a representation,
// or copy, of the resource in its current state. A get request is considered a
// safe method to call multiple times because it doesn't alter the state of the server.

// MAKING A GET REQUEST USING THE FETCH API
// We will continue to use the Fetch API to make HTTP requests. The fetch()
// method accepts an optional init object parameter as its second argument that
// we can use to define thinggs like:

// - method: HTTP method of the request, like GET.
// - headers: The headers to send.
// - mode: Used for security, we'll talk about this in future courses.
// - body: The body of the request. Often encoded as JSON.

// Example GET request using fetch:
// await fetch(url, {
//   method: "GET",
//   mode: "cors",
//   headers: {
//     "sec-ch-ua-platform": "macOS",
//   },
// });

// async function getUsers(url, apiKey) {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//     },
//   });

//   return response.json();
// }

// // Don't touch below this line

// const generatedKey = generateKey();
// const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
// const users = await getUsers(url, generatedKey);
// logUsers(users);

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// function logUsers(users) {
//   for (const user of users) {
//     console.log(
//       `Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`,
//     );
//   }
// }

// WHY DO WE USE HTTP METHODS?
// The primary purpose of HTTP methods is to indicate to the server what we
// want to do with the resource we're trying to interact with. At the end of
// the day, an HTTP method is just a string, like GET, POST, PUT, or DELETE, but
// by convention, backend developers almost always write their server code so that
// the methods correspond with different "CRUD" actions.

// The CRUD actions are:
// Create, Read, Update, Delete

// THE 4 MOST COMMON HTTP METHODS MAP NICELY TO THE CRUD ACTIONS:
// POST = create
// GET = read
// PUT = update
// DELETE = delete

// POST REQUESTS

// An HTTP POST request send data to a server, typically to create a new resource.
// The body of the request is the payload that is being sent to the server with the
// request, its type is indicated by the Content-Type header.

// ADDING A BODY
// The body of the request is the payload that is being sent to the server with
// the request, its type is indicated by the Content-Type header - for us, that's
// going to be a JSON. Post request are generally not safe methods to call multiple
// times, because it alters the state of the server. You wouldn't want to accidentally
// create 2 accounts for the same user, for example.

// await fetch(url, {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });

// async function createUser(apiKey, url, data) {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   return response.json();
// }

// const userToCreate = {
//   characterName: "Grendel",
//   class: "Warrior",
//   level: 1,
//   pvpEnabled: false,
//   user: {
//     name: "Allan",
//     location: "USA",
//     age: 27,
//   },
// };

// const generatedKey = generateKey();
// const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

// async function getUsers(url, apiKey) {
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

// function logUsers(users) {
//   for (const user of users) {
//     console.log(
//       `Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`,
//     );
//   }
// }

// console.log("Retrieving user data...");
// const userDataFirst = await getUsers(url, generatedKey);
// logUsers(userDataFirst);
// console.log("---");

// console.log("Creating new character...");
// const creationResponse = await createUser(generatedKey, url, userToCreate);
// console.log(`Creation response body: ${JSON.stringify(creationResponse)}`);
// console.log("---");

// console.log("Retrieving user data...");
// const userDataSecond = await getUsers(url, generatedKey);
// logUsers(userDataSecond);
// console.log("---");

// HTTP STATUS CODES

// When looking at request we can check on the Status Code of the request to
// get some information if the request was successful or not.

// 100-199: Informational responses. There are very rare
// 200-299: Successful response. Hopefully, most responses are 200's!
// 300-399: Redirection messages. These are typically visible because the
// browser or HTTP client will automatically do the redirect.
// 400-499: Client errors. You'll see these often, espeially when trying to
// debug a client application
// 500-599: Server errors. You'll see these sometimes, usually only if there
// is a bug on the server.

// Here are some of the most common status codes, but you can see a full list here if you're interested.

// 200 - OK. This is by far the most common code, it just means that everything worked as expected.
// 201 - Created. This means that a resource was created successfully. Typically in response to a POST request.
// 301 - Moved permanently. This means the resource was moved to a new place, and the response will include where that new place is. Websites often use 301 redirects when they change their domain name, for example.
// 400 - Bad request. A general error indicating the client made a mistake in their request.
// 403 - Unauthorized. This means the client doesn't have the correct permissions. Maybe they didn't include a required authorization header, for example.
// 404 - Not found. You'll see this on websites quite often. It just means the resource doesn't exist.
// 500 - Internal server error. This means something went wrong on the server, likely a bug on their end.

// async function getUserCode(url, apiKey) {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//     },
//   });
//   return response.status;
// }

// const generatedKey = generateKey();

// const invalidId = "invalid-id";
// const codeFirst = await getUserCode(
//   `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`,
//   generatedKey,
// );
// console.log(`id: ${invalidId}, status code: ${codeFirst}`);

// const validId = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";
// const codeSecond = await getUserCode(
//   `https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`,
//   generatedKey,
// );
// console.log(`id: ${validId}, status code: ${codeSecond}`);

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// HTTP PUT
// The HTTP PUT method creates a new resource or replaces a reprentation of
// the target resource with the ocntents of the request's body. In short, it
// updates a resource's properties

// await fetch(url, {
//   method: "PUT",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// });

// POST VS PUT
// You may be thinking PUT is similar to POST or PATCH, and frankly, you'd be right!
// The main difference is that PUT is meant to be idempotent, meaning multiple
// identical PUT request should have the same effect on the server. In constrast
// several identical POST request would have additional side effects, such as
// creating multiple copies of the resource.

// async function updateUser(baseURL, id, data, apiKey) {
//   const fullURL = `${baseURL}/${id}`;
//   const response = await fetch(fullURL, {
//     method: "PUT",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "X-API-Key": apiKey,
//     },
//     body: JSON.stringify(data),
//   });

//   return response.json();
// }

// async function getUserById(baseURL, id, apiKey) {
//   const fullURL = `${baseURL}/${id}`;
//   const response = await fetch(fullURL, {
//     method: "GET",
//     headers: {
//       "X-API-Key": apiKey,
//     },
//   });

//   return response.json();
// }

// // don't touch below this line

// const userId = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
// const generatedKey = generateKey();
// const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// function logUser(user) {
//   console.log(
//     `User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`,
//   );
// }

// const userData = await getUserById(baseURL, userId, generatedKey);
// logUser(userData);

// console.log(`Updating user with id: ${userId}`);
// userData.characterName = "Dellbiar";
// userData.level = 7;
// userData.class = "Warrior";
// userData.pvpEnabled = true;
// userData.user.name = "Allan";
// await updateUser(baseURL, userId, userData, generatedKey);

// const newUser = await getUserById(baseURL, userId, generatedKey);
// logUser(newUser);

// HTTP PATCH VS PUT
// You may encounter PATCH methods from time to time. While it is not nearly as
// common as the other methods, like PUT, it's important to know about it and
// what it does. The PATCH method is intended to partially modify a resource.

// Long story short, PUT isn't nearly as popular as PUT, and many servers, even
// if they allow partial updates, will still just use the PUT method for that.

// HTTP DELETE
// The delete request does exactly as you would expect: it deletes a specified
// resource.

// This deletes the location with ID: 52fdfc07-2182-454f-963f-5f0f9a621d72
// const url =
//   "https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72";

// await fetch(url, {
//   method: "DELETE",
//   mode: "cors",
// });
