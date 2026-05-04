let config = {}; // empty object

// Adding properties dynamically
config.browser = "Chrome";
config.timeout = 3000;

// Updating existing property
// If key already exists, value will be overwritten
config.timeout = 5000;

console.log(config); 
// Output: { browser: 'Chrome', timeout: 5000 }


// Deleting a property
delete config.browser;

console.log(config); 
// Output: { timeout: 5000 }
