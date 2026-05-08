function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK")
        }, 1000);
    })
}

async function parallelTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let [step1, step2, step3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ])

    console.log(step1);
    console.log(step2);
    console.log(step3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

parallelTest()