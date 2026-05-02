//Null - "intentionally nothing"

let selectedItem = null;
let searchResult = null;

console.log(searchResult) // null

//undefined - 'not yet assigned'
let declaredOnly;              // automatically undefined
console.log(declaredOnly)     // undefined

//Equality comparisons
console.log(null == undefined) //true
console.log(null === undefined) //false




console.log(null == undefined)   // true
console.log(null === undefined)  // false



/* This uses loose equality (==).

* In JavaScript, null and undefined are special cases
* They are considered equal to each other (and nothing else)

👉 So:

null == undefined  // true */




/* This uses strict equality (===).

Strict equality checks:

1. Value
2. Type

👉 Types are different:

* null → type: object (this is a known JS quirk)
* undefined → type: undefined

So:

null === undefined  // false */


