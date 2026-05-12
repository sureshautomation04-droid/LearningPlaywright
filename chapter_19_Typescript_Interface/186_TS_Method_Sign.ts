// =======================
// INTERFACE DEFINITION
// =======================

// Define a contract for Calculator
interface Calculator {
    // Method syntax (normal function)
    add(a: number, b: number): number;

    // Method syntax
    subtract(a: number, b: number): number;

    // Function type syntax (arrow function style)
    multiply: (a: number, b: number) => number;
}


// =======================
// IMPLEMENTATION
// =======================

// Create object that follows Calculator interface
const calc: Calculator = {

    // Implementation of add method
    //add: (a, b) => a + b,
    add(a, b) {
        return a + b;
    },

    // Implementation of subtract method
    subtract: (a, b) => a - b,

    // Implementation of multiply method
    multiply: (a, b) => a * b
};


// =======================
// OUTPUT (OBJECT)
// =======================

// This will print the whole object (functions, not results)
console.log("Calculator Object:", calc);


// =======================
// CALLING METHODS
// =======================

// Call add method
console.log("Add:", calc.add(10, 5));          // 15

// Call subtract method
console.log("Subtract:", calc.subtract(10, 5)); // 5

// Call multiply method
console.log("Multiply:", calc.multiply(10, 5)); // 50


// =======================
// REAL QA STYLE LOGGING
// =======================

// Example: using in test logs
console.log(`Result Add: ${calc.add(2, 3)}`);
console.log(`Result Subtract: ${calc.subtract(7, 4)}`);
console.log(`Result Multiply: ${calc.multiply(3, 3)}`);