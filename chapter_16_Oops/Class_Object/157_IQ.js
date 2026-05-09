// Class representing an API Client
class APIClient {

    // Constructor → initializes the base URL (attribute)
    constructor(baseURL) {
        this.baseURL = baseURL; // store base URL (staging/prod)
    }

    // Method (behaviour) → builds full API endpoint
    get(path) {
        return this.baseURL + path; // combine base URL + API path
    }
}

// Creating object for STAGING environment
let staging = new APIClient("https://staging.api.com");

// Creating object for PRODUCTION environment
let prod = new APIClient("https://prod.api.com");

// Calling get() method → returns full API URL
console.log(staging.get("/users")); 
// Output: https://staging.api.com/users

console.log(prod.get("/users")); 
// Output: https://prod.api.com/users