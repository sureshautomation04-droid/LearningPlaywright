// Objects
// Key and value

let student1 = { name: "Suresh"};
let student2 = { name: "Suresh", age: 32};
let student3 = { name: "Suresh", age: 32, phone: 9052624576}

console.log(student1);
console.log(student2);
console.log(student3);

// Key will not be in the double qutoes
// below key in doubt is actually JSON

let student4 = { "name": "Suresh", "age": 32, "phone": 9052624576}


// -------

let a = { status: "Pass" };

// Dot notation → most commonly used
// Access property using object.property
console.log(a.status); // Output: "Pass"

// Bracket notation → useful in special cases
// Access property using object["property"]
console.log(a["status"]); // Output: "Pass"


let a1 = { status: "Pass" };
let key = "status";
console.log(a1[key]);  // Output: "Pass"
console.log(a1.key);  // Undefined

// key are case Sensitive
let a2 = { status: "Pass", Status: "Fail"}
console.log(a2.status); // Pass
console.log(a2.Status); // Fail

let b = a // b copies the REFERENCE, not the object
b.status = "Fail";
console.log(a.status); // Fail

// Two separate objects — different memory
// c and d have same data
//But they are stored in different memory locations

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); //false

let c1 = { status: "pass" };
let d1 = c1;  // same reference

console.log(c1 === d1); // true

const t_json = {
    "name": "Suresh",
    "age": 20
}
console.log(t_json); // { name: 'Suresh', age: 20 }

const t_js = {
    name: "Suresh",
    age: 20
}
console.log(t_js); // { name: 'Suresh', age: 20 }
