// Creating a Promise object

let order = new Promise(function (resolve, reject) {

    // Condition to check food status

    let foodready = true;

    // If food is ready → Promise SUCCESS

    if (foodready) {

        // resolve() sends success result

        resolve("Pizza is delivered!");

    } else {

        // reject() sends failure/error result

        reject("Order Cancelled!");

    }

});

// Printing the Promise object itself
console.log(order); // Promise { 'Pizza is delivered!' }

// A Promise is an OBJECT. It wraps a value that will be available later.
