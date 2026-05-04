let config1 = { browser: "Chrome", timeout: 3000 };

/* ✔ let → you can:

* modify properties ✅
* reassign object ✅ */

// ✅ Modifying properties — allowed
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;

console.log(config1);
// { browser: 'Firefox', timeout: 5000, retries: 2 }

// ✅ Reassigning whole object — allowed
config1 = { browser: "Safari" };

console.log(config1);
// { browser: 'Safari' }

// print
console.log("---- ")

/* * const → reference cannot change
* BUT object content → can change */

const config = { browser: "Chrome", timeout: 3000 };

// ✅ Modifying properties — allowed
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;

console.log(config);
// { browser: 'Firefox', timeout: 5000, retries: 2 }

// ❌ Reassigning whole object — NOT allowed
config = { browser: "Safari" };  // ❌ ERROR