//Return values

function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client error";
    if (code >= 500) return "Server error"
}

console.log(getStatus(200)); // Success
console.log(getStatus(404)); // Client error
console.log(getStatus(500)); // Server error


//Return nothing -> undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    //no return statement
}

logTest('Hi this is a log');

function aaa() {
    return [2,2,3,4,5]
     return {"name": "Promod"}; - object

      return {

        numbers: [2,2,3,4,5],
        name: "Promod"

    };
}