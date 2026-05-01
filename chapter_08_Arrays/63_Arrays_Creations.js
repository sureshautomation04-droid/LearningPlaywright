//Array

let fruits = [] //empty []
let fruits_fresh = ["apple","banana","cherry"];

//3, index - 0,1,2

let arr = [10,20,30,40]; 
console.log(arr.length); //length is property, () ->function

console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]);  //undefined

let testResults = ["pass","fail","pass","skip"];
let mixed = [1,"hello",true,null]; // Js arrays can hold any type

//Creating Arrays

//Array literal (perferred)
let browsers = ["Chrome","Firefox","Safari"];

//Array constructor
let scores = new Array(3).fill(45)
console.log(scores)

let scores1 = new Array(1,2,3)
console.log(scores1.length)
console.log(scores1)

let number = new Array(100,200,300,400); //0-3: 4
console.log(number);

let test = Array.of(10,20,30,40,50);
console.log(test); //[ 10, 20, 30, 40, 50 ]
console.log(test[0]); //10

let chars = Array.from('hello');  //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars)


