// Real QA use: In Playwright, you define interface for API response shapes.
// If the backend changes a field name from userName to username,
// Typescript catches every place in your tests that uses the old name - instantly.

interface TestCase {
    id: number,
    name: string,
    status: string,
    duration: number
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id +": " + test1.name +" -> " + test1.status +" (" + test1.duration + " ms)"); // TC-1: Login with valid credentials -> PASS (1500 ms)


let test2: TestCase = {
    id: 2,
    name: "Login with invalid password",
    status: "FAIL",
    duration: 3200
}

console.log( `TC-${test2.id}: ${test2.name} -> ${test2.status} (${test2.duration} ms)`); // TC-2: Login with invalid password -> FAIL (3200 ms)

// let test3: TestCase = {
//     id: 3,
//     name: "Login with valid credentials",
//     status: "PASS",
// }
// console.log("TC-" + test3.id + ": " + test3.name + " → " + test3.status);