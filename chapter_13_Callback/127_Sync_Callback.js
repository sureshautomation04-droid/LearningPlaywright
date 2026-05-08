// Array of test results
let testResults = ["Pass", "Fail", "Pass", "Skip"];

// forEach loop → executes callback for each element
testResults.forEach(function (result, index) {

    // result → actual value (Pass/Fail/Skip)
    // index → position (0,1,2,3)

    console.log("Test " + index + " -> " + result);
});

// This runs AFTER loop finishes
console.log("All done");

// Problem 1: Count Pass/Fail/Skip

let summary = {
    pass: 0,
    fail: 0,
    skip: 0
}

testResults.forEach((result) => {

    if (result === "Pass") summary.pass++;
    else if (result === "Fail") summary.fail++;
    else summary.skip++;

});

console.log(summary) // { pass: 2, fail: 1, skip: 1 }

// Problem 2: Print Only Failed Tests

testResults.forEach((result, index) => {

    if(result === "Fail") {
        console.log(`Test ${index} failed`) //Test 1 failed
    }
});

// Problem 3: Add Status Label

let testResults1 = ["Pass", "Fail"];

testResults1.forEach((result, index) => {

    if (result === "Pass") {
        console.log(`Test ${index} -> PASS ✅`);
    } else {
        console.log(`Test ${index} -> FAIL ❌`);
    }
});