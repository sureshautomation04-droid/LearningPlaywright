function add(a, b, c) {
    return a + b + c
}

let num = [1,2,3];
console.log(add(...num));  // sum -> 6


function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];

console.log(hasError(...responseCodes)); // true