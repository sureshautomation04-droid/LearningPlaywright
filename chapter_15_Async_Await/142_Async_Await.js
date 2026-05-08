// Function to get token
function getToken() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("abc123"); // token
        }, 1000);
    });
}

// Function to get user using token
function getUser(token) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("User data for token: " + token);
        }, 1000);
    });
}

// Using Promise chaining
getToken()
    .then(function (token) {
        return getUser(token);
    })
    .then(function (user) {
        console.log(user);
    });

// Using async/await
async function run() {
    let token = await getToken();
    let user = await getUser(token);
    console.log(user);
}

run();