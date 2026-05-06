// Callback Example

// Main function (accepts item + callback function)
function placeOrder(item, callback) {
    console.log('Placing order for:', item); // Step 1: order placed

    // Execute the callback function
    callback(); // Step 2: call the function passed as argument
}

// Named callback function
function print() {
    console.log("Normal Fn - Done with the order"); // This runs after placeOrder
}

// First Way → Passing named function as callback
placeOrder('Burger', print);


// Second Way → Anonymous function (function without name)
placeOrder("Burger", function () {
    console.log('Anonymous Fn - I am also a function without name!');
});


// Third Way → Arrow function (modern ES6 syntax)
placeOrder("Burger", () => {
    console.log("Arrow Fn - I am also a function without name!");
});



/* -------------------------------------------------- */


// Another example with parameters
function test(text, callback) {
    console.log("Test Case:", text); // Print input text

    callback(); // Execute callback function
}


// Using Anonymous function as callback
test("Verify that the login page is working", function () {
    console.log("Running Anonymous function");
});


// Using Arrow function as callback
test("Has title", () => {
    console.log("Running Arrow function");
});