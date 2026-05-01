let original = [1,2,3];

let copy1 = [...original]; // spread
console.log(copy1); //[ 1, 2, 3 ]

let copy2 = original.slice();
console.log(copy2); //[ 1, 2, 3 ]

let copy3 = Array.from(original);
console.log(copy3); //[ 1, 2, 3 ]

let copy4 = original.concat();
console.log(copy4); //[ 1, 2, 3 ]

copy1.push(99)
console.log(original);  // [ 1, 2, 3 ]
console.log(copy1);  // [ 1, 2, 3, 99 ]


// Deep copy (JSON)
let c = original;
original.push(99)
console.log(original);  // [ 1, 2, 3, 99 ]
console.log(copy1);  // [ 1, 2, 3, 99 ]
