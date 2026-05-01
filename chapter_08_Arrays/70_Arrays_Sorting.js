let fruits = ["banana","apple","cherry"];
fruits.sort();  // [ 'apple', 'banana', 'cherry' ]
console.log(fruits);

let nums = [10,1,21,2];
nums.sort();  // [ 1, 10, 2, 21 ] <- Wrong (compares as strings)
console.log(nums)

nums.sort((a,b) => a - b); //Ascending
console.log(nums) // [ 1, 2, 10, 21 ]

nums.sort((a,b) => b - a); // Descending
console.log(nums); // [ 21, 10, 2, 1 ]