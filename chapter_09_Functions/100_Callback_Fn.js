//1. Basic Callback Example

function greet(name, callback) {
    console.log("HI ", name);
    callback(); // calling the callback function
}

function sayBye() {
    console.log("Goodbye!")
}

// passing function as a callback
greet("Alice", sayBye);


//2. Callback with Anonymous Function

function processUserInput(callback) {
    const name = "Bob";
    callback(name)
}

processUserInput(function(name) {
    console.log("Hello "+ name)
});

// 3.Real-World Example (Async Callback)
console.log("Start");

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");