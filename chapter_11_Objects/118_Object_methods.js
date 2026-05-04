const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 30 };

for(const key in user) {
    console.log(`${key}: ${user[key]}`)
}

// Object.keys/values/entries
// Returns array of keys
Object.keys(user).forEach(key => {
    console.log(key);
})

// Returns array of [key, value] pairs
Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
}) 