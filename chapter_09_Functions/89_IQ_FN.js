// Return a value
function getStatus(code) {
    if(code >= 200 && code < 300) return "success";
    if(code >= 400 && code < 500) return "client error";
    if(code >= 500 ) return "server error";
}


console.log(getStatus(200));  // success
console.log(getStatus(404));  // client error
console.log(getStatus(500));  // server error


function logTest(name) {
    console.log(`Running: ${name}`) //Running: Login
    //no return statement
}

let result = logTest('Login');
console.log(result) //undefined

greet("Alice");
console.log(greet("Alice")); // Hello, Alice

function greet(name) {
    return `Hello, ${name}`
}

// No Excpression -- Not hoisted

sayHi('Bob');

var sayHi = function (name) {
    return `Hello, ${name}`
}