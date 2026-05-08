// When Step 2 depends on Step 1's result, you Must run them Sequentially

// Step1 - Step 2

function apiCall(name) {
    return new Promise(function (resolve) {

        setTimeout(function () {
            resolve(name +" 200 Ok!");
        }, 1000)

    });
}

async function sequentialTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let step1 = await apiCall("Login API");
    console.log(step1);

    let step2 = await apiCall("Dashboard API");
    console.log(step2);

     let step3 = await apiCall("Report");
    console.log(step3);

    console.log("Time: ~" + (Date.now() - start) + "ms")
}


sequentialTest();