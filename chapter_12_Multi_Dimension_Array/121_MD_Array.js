// 1D array (list) - can contain duplicate elements
let result = ["pass", "fail", "pass"];


// 2D array (array of arrays) - like a table/grid
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Another 2D array with single row
let matrix_2D = [
    [1, 2, 3, 4]
];

console.log("------");

// Main grid (2D array)
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


// ✅ Using traditional for loop
// Outer loop → iterates rows
// Inner loop → iterates cells inside each row
for (let row = 0; row < grid.length; row++) {
    for (let cell = 0; cell < grid[row].length; cell++) {
        console.log(grid[row][cell] + " "); // print each element
    }
    console.log(" "); // line break after each row
}

console.log("------");


// ✅ Using for...of loop (cleaner than for loop)
// row → each inner array
// cell → each value inside row
for (let row of grid) {
    for (let cell of row) {
        console.log(cell); // print each element
    }
}

console.log("-------");


// ✅ Using forEach (most modern & readable)
// row → each inner array
// cell → each value
grid.forEach(row => {
    row.forEach(cell => {
        console.log(cell); // print each element
    });
    console.log(" "); // line break after each row
});