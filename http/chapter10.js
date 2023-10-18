// HTTPS
// Hyptertext Transfer Protocol Secure or HTTPS is an extension of the HTTP protocol.
// HTTPS secures the data transfer between client and server by ecrypting all the
// communications.

// HTTPS allows a client to safely share sensitive information with the server
// through an HTTP request, such as credit card information, passwords, or bank
// account numbers.

// const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";

// async function getUserById(url, id) {
//   const path = `${url}/${id}`;
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

// // don't touch below this line

// const uuid = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
// const apiKey = generateKey();

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

// const user = await getUserById(url, uuid);
// logUser(user);

// SECURITY AND ENCRYPTION
// HTTPS requires that the client use SSL (Secure Socket Layer) or TLS (Transport Layer Security) to protect requests and traffic
// by encrypting the information in the request. HTTPS is just HTTP with extra
// security!

// HTTPS KEEPS YOUR MESSAGE PRIVATE, BUT NOT YOUR IDENTITY
// It's important to note that while HTTPS encrypts what you are saying, it doesn't
// necessarily protect who you are. Tools like VPNs are needed for remaining an
// anonymous online.

// HTTPS ENSURES THAT YOU'RE TALKING TO THE RIGHT PERSON (OR SERVER)
// In addition to encrypting the information within a request, HTTPS uses digital signatures
// to prove that you're communicating with the server that you think you are. If
// a hacker were to intercept an HTTPS request by tapping into a network cable,
// they wouldn't be able to successfully pretend they are your bank's web server.
