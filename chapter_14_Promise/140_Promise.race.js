// Fast server → responds in 100ms
let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms");  // resolves quickly
    }, 100); // ✅ delay should be inside setTimeout
});

// Slow server → responds in 500ms
let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Slow 500ms");  // resolves slowly
    }, 500); // ✅ delay should be inside setTimeout
});

// Promise.race → returns the FIRST completed promise
Promise.race([fastServer, slowServer])
    .then(function (winner) {
        // This runs when the fastest promise resolves
        console.log("Winner:", winner);
    })
    .catch(function (error) {
        // Runs if the fastest promise fails
        console.log("Error:", error);
    });