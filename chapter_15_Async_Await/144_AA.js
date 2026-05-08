//  Function Names
// Basic Async/Await
async function getTestResults() {
    return "Pass";
}

// async function always returns a Promise
getTestResults().then(function (result) {
    console.log(result); // Pass
});

// Variable Names (inside async function)
async function runTest() {
    let result = await Promise.resolve("Login test passed")
    console.log(result); // Login test passed

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2); // Dashboard test passed
}

runTest();