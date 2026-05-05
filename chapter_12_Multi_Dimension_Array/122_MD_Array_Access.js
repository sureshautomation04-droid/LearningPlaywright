// 2D array (3x3 matrix) → rows × columns
let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Access elements → grid[row][column]
console.log(grid[0][0]); // 10 → 1st row, 1st column
console.log(grid[2][1]); // 80 → 3rd row, 2nd column
console.log(grid[1][2]); // 60 → 2nd row, 3rd column


// Update element
grid[0][0] = 99; // change 10 → 99
console.log(grid[0][0]); // 99
console.log(grid); // updated matrix


// Length
console.log(grid.length); // 3 → number of rows
console.log(grid[0].length); // 3 → number of columns in first row


// Last element (generic way)
console.log(
    grid[grid.length - 1][grid[0].length - 1]
); // 90


// Real-time example → test data matrix
let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];


// ✅ Using traditional for loop
// i → row index
// j → column index
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " "); // print each value
    }
    console.log(" "); // new line after each row
}

console.log(" --------- ");


// ✅ Using for...of loop (clean & readable)
// row → each inner array
// cell → each value inside row
for (const row of testMatrix) {
    for (const cell of row) {
        process.stdout.write(cell + " "); // print in same line
    }
    console.log(" "); // move to next line after row
}

console.log(" --------- ");


// ✅ Using forEach (modern approach)
// row → each inner array
// cell → each value
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log(" "); // new line after each row
});