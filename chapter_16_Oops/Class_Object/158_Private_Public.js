// Private Fields (#) - Hidden Data
// Public Fields

class Credentials {
    #apiKey;
    user;


constructor(user, key) {
    this.user = user; // Public
    this.#apiKey = key; 
}

getAuthHeader() {
    return `Bearer ${this.#apiKey}`
}

}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user); // admin
//console.log(cred.apiKey); // undefined
//console.log(cred.#apiKey); // error

console.log(cred.getAuthHeader()); // Bearer scret_key_1234

// cred.apiKey is undefined
// (it doesn't exist). 
// cred.#apiKey would throw a SyntaxError. 
// The ONLY way to access it is through the public method getAuthHeader()


// Class to handle user credentials
class Credentials {

    // Private field (cannot be accessed outside the class)
    #apiKey;

    // Public field
    user;

    // Constructor → initializes values
    constructor(user, key) {
        this.user = user;       // Public property
        this.#apiKey = key;     // Private property
    }

    // Public method to access private field safely
    getAuthHeader() {
        return `Bearer ${this.#apiKey}`;
    }

    // Optional: Getter method for apiKey (controlled access)
    getApiKey() {
        return this.#apiKey;
    }

    // Optional: Setter method for apiKey (controlled update)
    setApiKey(newKey) {
        this.#apiKey = newKey;
    }
}


// Creating object
let cred = new Credentials("admin", "secret_key_1234");


// ✅ Access public property
console.log("User:", cred.user); 
// Output: admin


// ❌ Cannot access private field directly
// console.log(cred.#apiKey); // Syntax Error
// console.log(cred.apiKey);  // undefined


// ✅ Access private field using method
console.log("Auth Header:", cred.getAuthHeader());
// Output: Bearer secret_key_1234


// ✅ Access using getter
console.log("API Key (via getter):", cred.getApiKey());
// Output: secret_key_1234


// ✅ Update using setter
cred.setApiKey("new_secret_5678");


// ✅ Check updated value
console.log("Updated Auth Header:", cred.getAuthHeader());
// Output: Bearer new_secret_5678