// =======================
// API RESPONSE INTERFACE
// =======================

// Interface with optional and readonly properties
interface APIResponse {
    readonly statusCode: number; // cannot be modified after assignment
    body: string;                // required field
    headers?: object;            // optional field
    responseTime?: number;       // optional field
}

// Create object
let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};

// Access values
console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers); // undefined (not provided)

// ❌ Not allowed (readonly)
// response.statusCode = 500; // Error

// ✅ Allowed (normal property)
response.body = '{"user": "superadmin"}';

console.log("Updated Body:", response.body);

console.log("---------------------------");


// =======================
// READONLY OBJECT
// =======================

interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };

console.log("Point:", point.x, point.y);

// ❌ Not allowed (readonly properties)
// point.x = 5; // Error


console.log("---------------------------");


// =======================
// READONLY ARRAY
// =======================

interface Data {
    readonly items: readonly number[]; // fully immutable array
}

const data: Data = {
    items: [1, 2, 3, 4]
};

console.log("Items:", data.items);

// ❌ Not allowed (array is readonly)
// data.items.push(5);   // Error
// data.items[0] = 10;   // Error

// ✅ Allowed (read only operations)
console.log("First Item:", data.items[0]);
console.log("Length:", data.items.length);


console.log("---------------------------");


// =======================
// QA REAL-TIME EXAMPLE
// =======================

interface TestResult {
    readonly id: number;
    status: string;
    duration?: number; // optional (API may not return)
}

let test: TestResult = {
    id: 101,
    status: "PASS"
};

console.log(
    `Test-${test.id}: ${test.status} (${test.duration ?? "N/A"} ms)`
);

// ❌ Cannot modify readonly
// test.id = 102; // Error

// ✅ Can update non-readonly
test.status = "FAIL";

console.log(
    `Updated Test-${test.id}: ${test.status}`
);