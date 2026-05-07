let apiCall = new Promise(function (resolve, reject){
    resolve({
        status: 200,
        body: "User Data"
    })
})



apiCall.then(function (response) {
    console.log(response);  // { status: 200, body: 'User Data' }
    console.log(response.status); // 200
    console.log(response.body); // User Data
})

// .then() runs ONLY when the promise resolves successfully.
