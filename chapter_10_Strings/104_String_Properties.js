// String Properties & Basic Access

let str = "Hello, World!"

// Length ( start from 1)
console.log(str.length) // 13

// Access by index
console.log(str[0]);  // H
console.log(str[7]);  // W
console.log(str[14]); // undefined

console.log(str.at(-1));  // !
console.log(str.at(-6));  // W

// charAt()
console.log(str.charAt(0)); // H

//charCodeAt() - Unicode value
console.log(str.charCodeAt(0)); // 72