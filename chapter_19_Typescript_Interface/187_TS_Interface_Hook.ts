// Interface for test hook function
interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[BEFORE] Setting up: " + testName);

};

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);

};

beforeEachHook("Login Test");

// This is where My Test case will be 

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id +": " + test1.name +" -> " + test1.status +" (" + test1.duration + " ms)"); // TC-1: Login with valid credentials -> PASS (1500 ms)

afterEachHook("Login Test");

/* Output

[BEFORE] Setting up: Login Test
TC-1: Login with valid credentials -> PASS (1500 ms)
[AFTER] Tearing down: Login Test */