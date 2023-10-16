// WEB ADDRESSES

// In computing, web clients find other computers over the internet
// using Internet Protocol or IP addresses.

// An IP address is a numerical label that serves two main functions:
// 1. Location addressing
// 2. Network Identification

// DOMAIN NAMES SYSTEM (DNS) AND IP ADDRESSES (IP)
// Each device connected to the internet has a unique IP address. When we
// browse the internet, the domains we navigate to are all associated with a
// partticular IP address!

// For example, this wikipedia URL points to a page about miniatture pigs:
// https://en.wikipedia.org/wiki/Miniature_pig

// The domain portion of the URL is en.wikipedia.org
// en.wikipedia.org converts to a specific IP address, and that IP address
// tells your computer exactly where to communicate with that Wikipedia page.

// async function fetchIPAddress(domain) {
//   const resp = await fetch(
//     `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
//     {
//       headers: {
//         accept: "application/dns-json",
//       },
//     },
//   );
//   const respObject = await resp.json();
//   return respObject.Answer[0].data;
// }

// // don't touch below this line

// const domain = "api.boot.dev";
// const ipAddress = await fetchIPAddress(domain);
// if (!ipAddress) {
//   console.log("something went wrong in fetchIPAddress");
// } else {
//   console.log(`found IP address for domain ${domain}: ${ipAddress}`);
// }

// Deploying a real website to the internet is actually quite simple. It invovles
// only a couple of steps:

// 1. Create a server that hosts your website files and connect it to the internet
// 2. Acquiare a domain name
// 3. Connect the domain name to the IP address of your server
// 4. Your server is accessible via the internet!

// USING THE URL API IN JAVASCRIPT
// The URL API is built into javascript. You can create a new URL object:

// const urlObj = new URL("https://example.com/example-path?name=raven");
// console.log(urlObj);

// WHAT IS THE DOMAIN NAME SYSTEM
// DNS, or the "Domain Name System", is the phonebook of the internet. Humans
// connect to websites through domain names, like Boot.dev. DNS "resolves" these
// domain names to find the associated IP Addresses so that web client can load the
// resources for the specific address.

// SUBDOMAINS

// We learned about how a domain name resolves to an IP address, which is just a
// computer on a network - often the internet

// A Subdomain prefixes a domain name, allowing a domain to route network traffic
// to many different servers and resources.

// For example, the Boot.dev website that you're on right now is hosted on a
// different computer than our blog. Our blog, found at blog.boot.dev is hosted
// on our "blog" subdomain.
