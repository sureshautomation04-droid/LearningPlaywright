//Primitive → Call by Value

// Primitive data types → copied by VALUE
// number, string, boolean, null, undefined

let a = 10;
let b = a;  // copy value (not reference)

console.log(b); // 10
console.log(a); // 10

a = 20;  // changing 'a' does NOT affect 'b'

console.log(b); // 10
console.log(a); // 20

b = 30;  // changing 'b' does NOT affect 'a'

console.log(b); // 30
console.log(a); // 20

/* a → 10 → 20
   b → 10 → 30 */

console.log("--------");

//Objects → Call by Reference

// Objects → copied by REFERENCE
// object, array, function

let obj1 = { val: 10 };
let obj2 = obj1;  // copy reference (same memory)

console.log(obj2); // { val: 10 }
console.log(obj1); // { val: 10 }

obj1.val = 20;  // change via obj1

console.log(obj2); // { val: 20 }
console.log(obj1); // { val: 20 }

obj2.val = 30;  // change via obj2

console.log(obj2); // { val: 30 }
console.log(obj1); // { val: 30 }

/* obj1 ─┐
         ├──> { val: 10 → 20 → 30 }
   obj2 ─┘ */


// How to avoid this (create copy) 

let obj3 = { val: 10 };

// Shallow copy
let obj4 = { ...obj3 };

obj3.val = 20;

console.log(obj4); // { val: 10 } ✅ independent




