// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
console.log(url.includes("staging"))  // true
console.log(url.includes("production"))  // false


// startsWith / endsWith
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http://")); // false
console.log(url.endsWith("true")); // true


// indexof / lastIndexof
console.log(url.indexOf('a'));  // 10
console.log(url.lastIndexOf('a')); // 24
console.log(url.indexOf("nothere")); // -1

// search() - accepts regex, returns index
// Search basically works in a way that it searches with regex

console.log(url.search(/login/));  // 28  // regex
console.log(url.search(/\d+/)); // -1
