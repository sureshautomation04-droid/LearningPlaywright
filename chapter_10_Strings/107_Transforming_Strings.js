// TransForming Strings
let st = "i";
console.log(st.toUpperCase());          // I
// when working with internationalization (i18n) or specific languages
console.log(st.toLocaleUpperCase("tr")) // İ  (different!)


let str ="  Hello, World  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// Trim whitesspace
console.log(str.trim());


// removes only leading spaces (from the beginning)
console.log(str.trimStart());


// removes only leading spaces (from the ending)
console.log(str.trimEnd());


// Replace
let msg = "Test: FAIL, Retry: FAIL"
console.log(msg.replace("FAIL", "PASS"))  // "Test: PASS. Retry: FAIL."  (first only)
console.log(msg.replaceAll("FAIL", "PASS")) // Test: PASS, Retry: PASS
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex


// Concatenation
console.log("Hello" + " " + "World");
console.log("Hello".concat(" " + "World"));
console.log(`${"Hello"} ${"World"}`);


let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"))  //  g → Global (all matches)
console.log(url.replace(/app/i, "qa"))  //  i → Case-insensitive

// Splitting & Joining
console.log("pass,fail,skip".split(",")); // [ 'pass', 'fail', 'skip' ]
console.log("hello".split(""));  // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("hello".split(" ")); // ['hello']
console.log("hello world".split(" ")); // ['hello','world']

console.log("test_login_pass".split("_").join(" ")) // test login pass

/* Output:
"test_login_pass"
   ↓ split("_")
['test','login','pass']
   ↓ join(" ")
"test login pass" */


// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("_");
console.log(date);  //2024_03_07

