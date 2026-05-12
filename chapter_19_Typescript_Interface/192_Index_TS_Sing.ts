// =======================
// STRING INDEX INTERFACE
// =======================

// This interface allows dynamic keys (like a dictionary / map)
// Key must be string and value must be string
interface StringDictionary {
    [key: string]: string;
}


// =======================
// OBJECT CREATION
// =======================

// Creating an object that follows StringDictionary
const dict: StringDictionary = {
    hello: "world",
    foo: "bar"
};


// =======================
// ACCESSING VALUES
// =======================

// Access using dot notation
console.log("hello:", dict.hello);   // world

// Access using bracket notation (useful for dynamic keys)
console.log("foo:", dict["foo"]);    // bar


// =======================
// ADDING NEW VALUES
// =======================

// Adding new key-value pair
dict["name"] = "Suresh";
console.log("name:", dict.name);


// =======================
// UPDATING VALUES
// =======================

// Updating existing value
dict["hello"] = "everyone";
console.log("updated hello:", dict.hello);


// =======================
// LOOPING THROUGH OBJECT
// =======================

// Iterate all keys
for (let key in dict) {
    console.log(key + " -> " + dict[key]);
}


// =======================
// INVALID CASE (ERROR)
// =======================

// ❌ Value must be string
// dict["age"] = 25; // Error: number not assignable to string


// =======================
// REAL QA EXAMPLE
// =======================

// Example: storing API headers
interface HeadersMap {
    [key: string]: string;
}

const headers: HeadersMap = {
    "Content-Type": "application/json",
    "Authorization": "Bearer token_123"
};

console.log("Headers:", headers);


// =======================
// USING FUNCTION
// =======================

// Function accepting dictionary
function printDict(data: StringDictionary): void {
    for (let key in data) {
        console.log(key + ": " + data[key]);
    }
}

printDict(dict);