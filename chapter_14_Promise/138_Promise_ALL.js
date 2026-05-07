let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (result) {
    console.log("All checks:",  result)  // All checks: [ 'Auth OK', 'DB OK', 'Cache OK' ]

})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (err) {
    console.log("Failed:", err)
});