// TTHE JAVASCRIPT RUNTIME

// A runtime environment is, put simply, where you program runs.

// The runtime determines which global objects your program can access, which
// in turn affects which APIs are available and how your code in interpreted and
// expected.

// WHAT ARE EXAMPLES OF JAVASCRIPT RUNTIMES
// In approximate order of usage:

// - A browser (and technically, each browser's runtime can be slightly different as well)
// - Node.js
// - A Web worker within a browser
// - Deno.js
// - Bun

// HOW TO THE RUNTIMES DIFFER

// They differ in many ways, but the main thing to keep in mind are:

// - Performance - Some runtimes run JS code faster or slower under different conditions.
// - APIs - The runtime exposes APIs to your code. For example, in a browser you can
// access the canvas API for drawing, but that's not available in Node. On the other hand,
// Node.js has some cryptography libraries available by default.
// Global object - In the browser, the global object is called window, in Node it's
// called global. The properties and methods available on that global object are quite
// different depending on the runtime.
