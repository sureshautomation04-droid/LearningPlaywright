Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed!"),
    Promise.resolve("Test C passed!")
]).then(function (result) {
    result.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
        if(r.status === 'fulfilled') {
            console.log(`Test ${i + 1}: Pass -> ${r.value}`)
        } else {
            console.log(`Test ${i + 1}: Fail -> ${r.reason}`)
        }

    })
})
// This is like a test report — you want results for ALL tests, not just stop at the first failure.

// Test 1: fulfilled - Test A Passed!
// Test 2: rejected - Test B failed!
// Test 3: fulfilled - Test C passed!

// status → "fulfilled" or "rejected"

// if fulfilled:
// value → actual resolved data

// if rejected:
// reason → actual error / rejection message
