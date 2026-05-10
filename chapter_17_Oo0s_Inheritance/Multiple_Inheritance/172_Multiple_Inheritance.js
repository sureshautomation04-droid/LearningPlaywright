// ❌ JavaScript does NOT support multiple inheritance directly
// class C extends A, B { }  → SyntaxError

// ✅ Solution: Use MIXINS to simulate multiple inheritance


// 🔹 Mixin 1: Adds logging capability
let LoggerMixin = function (Base) {
    // Takes a base class and returns a new class extending it
    return class extends Base {
        // New method added by this mixin
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}


// 🔹 Mixin 2: Adds screenshot capability
let ScreenshotMixin = function (Base) {
    return class extends Base {
        // New method added by this mixin
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    }
}


// 🔹 Base class (Parent)
class TestCase {
    constructor(name) {
        // Initialize test name
        this.name = name;
    }

    // Common method for all test cases
    run() {
        console.log("Running: " + this.name);
    }
}


// 🔥 Apply BOTH mixins to the base class
// Flow:
// TestCase → LoggerMixin → ScreenshotMixin → SmartTest

class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        // Call parent constructor (TestCase)
        super(name);
    }
}


// 🔹 Create object
let t = new SmartTest("Login Flow");


// 🔹 Call methods

t.run(); 
// Output: Running: Login Flow
// → Comes from TestCase (base class)

t.log("Test started"); 
// Output: [Log] Test started
// → Comes from LoggerMixin

t.takeScreenshot(); 
// Output: [SCREENSHOT] captured
// → Comes from ScreenshotMixin