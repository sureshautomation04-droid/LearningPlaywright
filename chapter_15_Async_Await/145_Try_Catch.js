// Error Handling - try/catch

// With Promise  you use .catch()
//  With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI() {
    try {
        let result = await Promise.reject("503 Server Unavailable");
        console.log("Result", result)
    } catch (error) {
        console.log("Error", error)
    } finally {
        console.log("Clean up!")
    }
}

testAPI();

// try/catch/finally maps directly to .then()/.catch()/.finally() — same logic, cleaner syntax.
