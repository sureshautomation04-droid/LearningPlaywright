console.log(null === undefined);  //false
console.log(null == undefined);  // true

console.log(null == 0);  //false
console.log(null === 0); //false
console.log(undefined == 0) //false
console.log(undefined === 0) //false


/* 🔹 1. null == 0 → false

Even though == does type coercion, null is NOT converted to 0 in comparisons.

👉 Rule:

* null only equals undefined (with ==)
* It does NOT equal numbers, strings, or booleans

So:

null == 0   // false

⸻

🔹 2. null === 0 → false

Strict check:

* null (type: object)
* 0 (type: number)

👉 Different type → false

⸻

🔹 3. undefined == 0 → false

undefined is even stricter:

👉 Rule:

* undefined only equals null (with ==)
* It does NOT convert to 0

So:

undefined == 0  // false

⸻

🔹 4. undefined === 0 → false

Strict check:

* undefined (type: undefined)
* 0 (type: number)

👉 Different → false */



console.log(null == "");  //false
console.log(null === ""); //false
console.log(undefined == "") //false
console.log(undefined === "") //false


/* 🔹 1. null == "" → false

* "" (empty string) is a string
* null is a special primitive

👉 Important rule:

* null does NOT convert to string or number in ==
* It only equals undefined

So:

null == ""   // false

⸻

🔹 2. null === "" → false

Strict check:

* null → type: object
* "" → type: string

👉 Different types → false

⸻

🔹 3. undefined == "" → false

* undefined does NOT convert to string

👉 Rule:

* undefined only equals null (with ==)

So:

undefined == ""   // false

⸻

🔹 4. undefined === "" → false

Strict check:

* undefined vs string

👉 Different → false

⸻

🔥 Key Takeaway (Very Important)

Value	Only loosely equals (==)
null	undefined
undefined	null

👉 Nothing else (not 0, not "", not false)

⸻

⚡ Compare with this (to avoid confusion)

console.log("" == 0);     // true
console.log(false == ""); // true */


