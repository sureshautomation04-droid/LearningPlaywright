// Higher- order Functions

// A function that takes a function as argument or return a function

function runWithLogging(testfn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testfn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

function loginTest() {
    return "pass"
}

function loginTestFailed() {
    return "fail"
}

runWithLogging(loginTest, "Login Test")
runWithLogging(loginTestFailed, "Dashboard Failed Test")

