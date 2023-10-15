// COMMUNICATING ON THE WEB
// Modern applicaitons needs to be able to communicate information between
// devices over the internet.

// HOW DOES WEB COMMUNICATION WORK?
// When two computers communicate with each other, they need to use the same rules.
// This "language" that computers use is called a protocol. The most popular protocol
// for web communication is HTTP, which stands for Hypertext Transfer Protocol.

// const apiKey = generateKey();
// const items = await getItemData();

// logItems(items);

// async function getItemData() {
//   const response = await fetch(
//     "https://api.boot.dev/v1/courses_rest_api/learn-http/items",
//     {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "X-API-Key": apiKey,
//         "Content-Type": "application/json",
//       },
//     },
//   );
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

// function logItems(items) {
//   for (const item of items) {
//     console.log(item.name);
//   }
// }

// HTTP REQUESTS AND RESPONSES
// At the heart of HTTP is a simple request-response system. The "requesting" computer,
// also known as the "client", asks another computer for some information. That computer,
// the "server" sends back a response with the information that was requested.

// We'll talk about the specifics of how the "requests" and "responses" are formatted later.
// For now, just think of it as a simple question-and-answer sytem.

// Request: "What are the items in the Fantasy Quest game?"
// Response: A list of the items in the Fantasy Quest game.

// HTTP POWERS WEBSITES
// As we discuseed, HTTP, or Hypertext Transfer Protocol, is a protocol designed
// to transfer information between computers.

// There are other protocols for communicating over the internet, but HTTP is the
// most popular and is particularly great for websites and web applications. Each
// time you visit a website, your browser is making an HTTP request to that website's
// server. The server responds with all the text, images, and styling information
// that your browser needs to render its pretty website!

// HTTP URLS
// A URL, or Uniform Resource Locator, is essentially the address of another computer,
// or "server" on the internet. Part of the URL specifies how to reach the server, and
// part of it tells the server what information we want - but more on that later.

// For now, it's important to understand that a URL represents a piece of information
// on another computer that we want access to. We can get access to it by making a
// request, and reading the response that the server replies with.

// const apiKey = generateKey();
// const itemURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";

// const items = await getData(itemURL);

// logItems(items);

// /**
//  * @param {string} url
//  */
// async function getData(url) {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "X-API-Key": apiKey,
//       "Content-Type": "application/json",
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

// function logItems(items) {
//   for (const item of items) {
//     console.log(item.name);
//   }
// }

// USING URLS IN HTTP
// The http:// at the beginningg of a website URL specifies that the http protocol
// will be used for communication.
// Other communication protocols use URLs as well. That's why we need to be specific
// when we're making http request by prefixing the URL with http://

// A "client" is a computer making HTTP request
// A "server" is a computer responding to an HTTP request
// A computer can be a client, a server, both, or neither. "Client" and "Server"
// are just words we use to describe what computer are doing within a communication system.
// Clients send request and receive response
// Server receive request and send responses

// JAVASCRIPT FETCH API

// The fetch function is made available to us by the javascript language running
// in the browser, all we have to do is provide itt with the parameters it requires.

// USING FETCH
// const response = await fettch(url, settings);
// const responseData = await response.json();

// We'll go in-depth on the various things happening in this standard fetch call
// later, but let's cover some basics for now

// - response is the data that comes back from the server
// - url is the url we are making a request to
// - settings is an object containing some request-specific settings
// - The await keyword tells Javascript to wait until the response comes back
// from the server before continuing
// response.json() converts the response datta from the server into a javascript object

// WEB SERVERS
// Up to this point, most of the data you have worked with in your code has simply
// been generated and sorted locally in variables.

// While you'll always use variables to store and manipulate data while your program
// is running, most websites and apps use a web server to store, sort, and serve that
// data so that it sticks around for longer than a single session, and can be accessed
// by multiple devices.

// LISTENING AND SERVING DATA
// Similar to how a server at a restaurant brings your food to the table, a web server
// serves web resources, such as web pages, images, and other data. Tthe server is turned
// on and "listening" for inbound request constantly so that the second it receives a
// new request, it can send an appropriate response.

// THE SERVER IS THE BACKEND
// While the "front-end" of a website or web application is the device the user
// interacts with, the "back-end" is the server that keeps all the data housed in
// a central location.

// A SERVER IS JUST A COMPUTER
// "Server" is just the name we give to a computer that is taking on the role of
// serving data across a network connection. A good server is turned on and available
// 24 hours a day, 7 days a week. While your laptop can be used as a server, it
// makes more sense to use a computer in a data center that's designed to be up
// and running constantly
