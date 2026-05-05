// 2D Arrays — Common Operations

let scores = [
    [85, 90, 78],   // student 0 → total = 253
    [60, 45, 70],   // student 1 → total = 175
    [95, 88, 92]    // student 2 → total = 275
];


// ✅ Row-wise sum (sum of each student marks)
// map() → loops each row (student)
// reduce() → adds all values inside that row
let rowSums = scores.map(row => 
    row.reduce((a, b) => a + b, 0)
);

console.log(rowSums); // [253, 175, 275]


// ✅ Column-wise sum
// scores[0].map → loop based on number of columns
// _ → we ignore actual value, only need index
// colIndex → current column index (0,1,2)
// reduce → sum values from each row for that column
let colSums = scores[0].map((_, colIndex) =>
    scores.reduce((sum, row) => sum + row[colIndex], 0)
);

console.log(colSums); // [240, 223, 240]

console.log('------')

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],     // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"] // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {

        // check if test case contains "fail"
        if (suiteResults[i][j].includes("fail")) {
           console.log(suiteResults[i][j]); // print failed cases
        } 
    }
}

console.log('------')
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {

        // check if test case contains "fail"
        if (suiteResults[i][j].includes("fail")) {

            // print in same line (no newline like console.log)
            process.stdout.write(suiteResults[i][j] + " ");
        }
    }
}

// optional: move to next line after printing all results
console.log();