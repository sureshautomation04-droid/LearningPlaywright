const user = { name1: "John", age: 30, city: "NYC" };

// 1. Basic destructuring

// Extract properties into variables
const { name1, age } = user;

console.log(name1); // "John"
console.log(age);   // 30


// 2. Rename variables(Alias)

// name1 → userName
// age → UserAge
const { name1: userName, age: UserAge } = user;

console.log(userName); // "John"
console.log(UserAge);  // 30

// 3. Default values

// If property NOT present → default is used
const { country = "USA" } = user;

console.log(country); // "USA"

// 4. Nested Destructuring

const data = { 
  user: { 
    name: "John", 
    address: { city: "NYC" } 
  } 
};

// Extract deeply nested value
const { user: { address: { city } } } = data;

console.log(city); // "NYC"
