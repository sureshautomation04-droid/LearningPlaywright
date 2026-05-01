//Slicing and Combining

let arr = [1, 2, 3, 4, 5]

//slice(start, end) - return new array, does Not mutate actual -> (start, end-1).index = 0
//Dont give the end, it will automay=tically take from start to end

// console.log(arr.slice(1,3))  // [2, 3]
// console.log(arr.slice(2,4))  // [3, 4]


// console.log(arr.slice(2,5))  // [3, 4, 5]

// console.log(arr.slice(2));    // [3, 4, 5]

// console.log(arr.slice(-2));  //[4,5]
// console.log(arr.slice(-3));  //[3,4,5]

// console.log(arr.slice(0));   //[ 1, 2, 3, 4, 5 ]
// console.log(arr.slice(-5));   //[ 1, 2, 3, 4, 5 ]



// Combining

let a = [1, 2];
let b = [3, 4];

let c = a.concat(b)
console.log(c);  // [ 1, 2, 3, 4 ]

let d = a.concat(b, [5,6])
console.log(d); // [ 1, 2, 3, 4, 5, 6 ]

//spread (modren way ) - concatenation.(...)

let e = [...a, ...b];
console.log(e) //[ 1, 2, 3, 4 ]

let f = [...a, ...b].concat([5,6]);
console.log(f) //[ 1, 2, 3, 4, 5, 6 ]


// Join
let s = ["pass", "fail","skip"].join(" | ")
console.log(s)
