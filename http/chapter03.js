// UNIFORM RESOURCE IDENTIFIERS

// A URI, or Uniform Resource Identifier, is a unique character sequence that
// identifies a resource that its (almost always) accessed via the internet.

// Just like javascript has syntax rules, so do URIs. These rules help ensure
// uniformity so that any program can interpet the meaning of the URI in the same
// way.

// URIs come in two main types:
// URLs ex: urn:isbn:0-486-27557-4
// URNs ex: https://google.com

// SECTIONS OF A URL
// URLs have quiet a few sections, some of which are required, others not.

// function printURLParts(urlString) {
//   const urlObj = new URL(urlString);

//   for (const property in urlObj) {
//     console.log(property);
//   }
// }

// const fantasyQuestURL =
//   "http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id";
// printURLParts(fantasyQuestURL);

// FURTHER DISSECTING A URL

// There are 8 main parts to a URL, though not all the section are always
// present. Each piece plays a specific role in helping clients locate the
// specified resource.

// http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort-rank#id
// protocol = http
// username = dragonslayer
// password = pwn3d
// doamin = fantasyquest.com
// port = 8080
// path = maps
// query = sort=rank
// fragment = #id

// The protocol is required
// Usernames and passwords are optional
// A domain is required
// The default port for a given protocol is used if one is not provided
// Tthe default (/) path is used if one isn't provided
// A query is optional
// A fragment is optional

// THE PROTOCOL

// The "protocol", also referred to as the "scheme", is the first component of
// a URL. its purpose is to define the rules by which the data being communicated
// is displayed, encoded or formatted.

// Some examples of different URL protocols:
// http
// ftp
// mailto
// https

// for example:
// http://example.com
// mailto:noreply@fantasyquest.app

// NOT ALL SCHEMES REQUIRES A "//"
// The "http" in a URL is always followed by ://. All the URLs have the colon,
// but the // part is only included for schemes that have an authority component.
// As you can see above, the mailto scheme doesn't use an authority component, so
// it doesn't need the slashes

// Assignment
// Complete the getMailtoLinkForEmail function. It shoudl return a "mailto"
// hyperlink for the given email.

// function getMailtoLinkForEmail(email) {
//   return `mailto:${email}`;
// }

// let email = "slayer@request.app";
// console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);
// email = "killer@fquest.app";
// console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`);

// URL PORTS
// The port in a URL is a virtual point where network connections are made. Ports
// are manage by a computer's operating system and are numbered from 0 to 65,535.
// It should be noted that port 0 is reserved for the system API and technically
// not an actual port.

// Whenever you connect to another computer over a network, you're connecting
// to a specific port on that computer, which is being listened to by a specifc
// piece of software on that computer. A port can only be used by one program at
// a time. which is why there are so many possible ports.

// The port component of a URL is often not visible when browsing normal sites
// on the internet, because 99% of the time you're using the default ports for
// the HTTP and HTTPS schems: 80 and 443 respectively.

// Whenever you aren't using a default port, you need to specify it in the URL.
// for example, port 8080 is often used by web developers when they're running
// their server in "test mode" so that they don't use the "production" port "80"

// URL PATHS
// In the early days of the internet, a URL's path often was a reflection of the
// file path on the server to the resource the client was requesting.

// For example, if the website https://exampleblog.com had a web server running
// within its /home directory, then a request tot the https://exampleblog.com/site/index.html
// URL might expectt index.html file from within the /home/site directory to be returned.

// Websites used to be very simple. They were just a collection of text documents stored
// on a server. A simple piece of server software could handle incoming HTTP request
// and respond with the document according to the path component of the URLs.

// THESE DAYS, IT'S NOT ALWAYS ABOUT THE FILESYSTEM
// On many modern web server, A URL's path isn't a reflection of the server's
// filesystem hierarchy. Paths in URLs are essentially just another type of
// parameter that can be passed to the server when making a request.

// Conventionally, two different URL paths should denote different resources. for
// example, different pages on a website, or maybe different data types from a game server

// QUERY PARAMETERS
// Query paremeters in a URL are not always present. In the context of websites,
// query parameters are often used for marketing analytics or for chaning a variable
// on the web page. With website URLs, query parameters rarely change which page
// you're viewing, though they often change the page's contents.
