// without function - repeated logic

let score1 = 85;
let result1 = score1 >= 70 ? "Pass" : "Fail"
console.log(result1);  // Pass

let score2 = 50;
let result2 = score2 >= 70 ? "Pass" : "Fail"
console.log(result2); // Fail


function getResult(score){
    return score >= 70 ? "Pass" : "Fail"
}

console.log(getResult(85)); // Pass
console.log(getResult(50)); // Fail