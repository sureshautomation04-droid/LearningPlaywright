// Extracting Substrings
let str = "Login_Test_Pass_001";

// slice(start, end) - negative indexes supported
console.log(str.slice(0, 5)); // (0, 4) -> "Login"
console.log(str.slice(11)); // start -> Pass_001
console.log(str.slice(-3));  // 001

let testNumber = str.slice(-3);
console.log(testNumber);

//substring(start, end) - no negatives (treats as 0)
console.log(str.substring(6, 10)); // Test

//at() for single chars
console.log(str.at(0)) // "L"
console.log(str.at(-1)) // "1"

