// WHAT ARE HTTP HEADERS?

// An HTTP header allows clients and servers to pass additional information with
// each request and response. Headers are just case-insensitive key-value-pairs
// that pass additional metadata about the request or response.

// HTTP request from a web browser carry with them many headers, including
// but not limited to:

// The type of client (e.g Google Chrome)
// The Operating system (e.g. Windows)
// The preferred language (e.g. English)

// As developers, we can also define custom headers in each request.

// HEADERS API
// The Headers API allows us to perform various actions on our request and response
// headers such as retrieving, setting, and removing them. We can access the headers
// object through the Request.headers and Response.headers properties.

// Use the .get() method on the requestt/response object headers property to
// get access to the header you need.

// function logContentType(resp) {
//   console.log(resp.headers.get("content-type"));
// }

// const apiKey = generateKey();
// const bootdevAPIDomain = "api.boot.dev";

// const items = await getItemData(bootdevAPIDomain);

// logContentType(items);

// async function getItemData(domain) {
//   const response = await fetch(
//     `https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`,
//     {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "X-API-Key": apiKey,
//         "Content-Type": "application/json",
//       },
//     },
//   );
//   return response;
// }

// function generateKey() {
//   const characters = "ABCDEF0123456789";
//   let result = "";
//   for (let i = 0; i < 16; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }

// USING THE BROWSER'S DEVELOPER TOOLS
// Modern web browsers offer developers a powerful set of developer tools. The
// Developer tools are front-end web developer's best friend! for example, using
// the dev tools you can:

// View the web page's javascript console output
// Inspect the page's HTMT, CSS, and JavaScript code
// View network requests and responses, along with their headers.

// WHY ARE HEADERS USERFUL?

// Headers are useful for several reasons from design to security, but most often
// headers are used as metadata or data about the request. So, far example, let's say
// we wanted to ask a player's level from the fantasy quest server. We need to send
// the that player's ID to the server so it knows which player to send back the information
// for. Tthat ID is my request, it's not information about my request.

// A good example of a use case for headers is authentication. Often times a user's
// credentials are included in request headers. Credentials don't have much to do
// with the request itself, but simply authorize the request to be allowed to make
// the request in question.

const generatedApiKey = generateKey();
const url =
  "https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72";
const newLocationData = {
  discovered: false,
  id: "52fdfc07-2182-454f-963f-5f0f9a621d72",
  name: "Bloodstone Swamp",
  recommendedLevel: 10,
};

const oldLocation = await getLocationResponse(generatedApiKey, url);
console.log("Got old location:");
console.log(
  `- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`,
);
console.log("---");

await putLocation(generatedApiKey, url, newLocationData);
console.log("Location updated!");
console.log("---");

// const newGeneratedApiKey = generateKey();
const newLocation = await getLocationResponse(generatedApiKey, url);
console.log("Got new location:");
console.log(
  `- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`,
);
console.log("---");

// don't touch below this line

async function getLocationResponse(apiKey, url) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function putLocation(apiKey, url, data) {
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
