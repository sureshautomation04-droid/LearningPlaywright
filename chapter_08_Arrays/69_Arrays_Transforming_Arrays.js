let scores = [45,82,91,60,73];

//map - transforms every element, returns New array

let grades = scores.map(s => s > 70 ? "Pass" : "Fail"); //[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]
console.log(grades)

// filter - keeps elements thst pass a test

let passing = scores.filter(s => s >= 70); // [ 82, 91, 73 ]
console.log(passing);

// reduce - accumulates to a single value

let total = scores.reduce((sum, s) => sum + s, 0); // 351
console.log(total);

//flat - flattens nested arrays
let nested = [[1,2],[3,4],[5]];
console.log(nested.flat()); // [ 1, 2, 3, 4, 5 ]