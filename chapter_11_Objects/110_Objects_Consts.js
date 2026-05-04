const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user)

//Accessing properties
console.log(user.name) //John
console.log(user["age"]) //30

// Dynamic property access
const key = "age"
console.log(user[key]) //30

// Adding/modifying properties
user.city = "NYC";
user.age = "32";
console.log(user) //{ name: 'John', age: '32', email: 'john@example.com', city: 'NYC' }
