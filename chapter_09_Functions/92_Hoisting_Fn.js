// Hoisting
// Function declarations are hoisted
// you can call them before they're defined
// Function expressions and arrow fuctions are Not

console.log(greet('Alice')); // Declaration -hoisted, works befor defination

function greet(name) {
    return `Hello, ${name}`
}

sayHi('Bob'); // Type Error: sayHi is not function

const sayHi = function (name) {
    return `Hi, ${name}`
}