// String Conversion

// To string
console.log((200).toString());   // "200"
console.log(true.toString());    // "true"

// To number
console.log(Number("42"));       // 42

console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14rem")); // 3.14 ✅ (you missed this)

let str = "hello"; // Strings are immutable in JavaScript
str[0] = "H";
console.log(str); // hello ❗ no change

let upper = str.toUpperCase();
console.log(str);   // hello (original unchanged)
console.log(upper); // HELLO