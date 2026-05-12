// void
function sayHello(msg: string): void {
    console.log(msg)
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)

// infiniteLoop.ts

// Function that never returns
function infiniteLoop(): never {
    console.log("Infinite loop started...");
    
    while (true) {
        // Simulating some work
    }
}

// Another function using never (throws error)
function throwError(message: string): never {
    throw new Error(message);
}

// Example usage
function startApp() {
    console.log("App started");

    // Uncomment ONE at a time to test

    // Case 1: Infinite loop (will hang execution)
    infiniteLoop();

    // Case 2: Throws error
    // throwError("Something went wrong!");

    console.log("This line will NEVER execute");
}

// Run the program
startApp();