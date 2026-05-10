class TestRunner {
    static totalTests = 0;
    static passCount = 0;

    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;

        if (passed) {
            TestRunner.passCount++;
        }
    }

    non_static_display() {
        return this.name;
    }

    static summary() {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}

// Creating objects
let t1 = new TestRunner("Login", true);
let t2 = new TestRunner("Signup", false);
let t3 = new TestRunner("Cart", true);
let t4 = new TestRunner("Checkout", true);

// Static method → call using class
console.log(TestRunner.summary());   // 3/4 passed

// Non-static method → call using object
console.log(t1.non_static_display()); // Login