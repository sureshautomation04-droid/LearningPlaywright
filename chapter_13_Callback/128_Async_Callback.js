// Step 1 → Runs immediately (synchronous)
console.log("Test 1: Started");

// Step 2 → setTimeout is asynchronous
setTimeout(function () {

    // This callback runs AFTER 2 seconds
    console.log('Test 2 : API response received!');

}, 2000);

// Step 3 → Does NOT wait for setTimeout
console.log("Test 3: Moving to next last");

/* Output

Test 1: Started
Test 3: Moving to next last
Test 2 : API response received! */