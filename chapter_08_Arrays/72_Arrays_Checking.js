//checking Arrays

//check if something Is an array

let result = Array.isArray([1,2,3])
console.log(result) // true

let result1 = Array.isArray("a")
console.log(result1) // false


// every & some 
console.log([80, 90, 85].every(s => s >= 70)) //true
console.log([80, 60, 85].every(s => s >= 70)) //false

// some - At Least one must pass
console.log([80,60,85].some(s => s < 70)) //true
console.log([80,90,85].some(s => s < 70)) //false

