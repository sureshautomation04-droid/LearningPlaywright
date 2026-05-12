// =======================
// INTERFACE DEFINITION
// =======================

// Defines the structure of a Bug Report
interface BugReport {
    id: number;                    // Unique bug ID
    title: string;                 // Bug title/summary
    severity: string;              // Severity level (Low, Medium, High, Critical)
    stepsToReproduce: string[];    // List of steps to reproduce the bug
}


// =======================
// FUNCTION TO LOG BUG
// =======================

// Function accepts a BugReport object
function logBug(bug: BugReport): void {

   // Print bug summary
   console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);

   // Loop through steps and print each step
   bug.stepsToReproduce.forEach(function (step: string, i: number) {
        console.log(" " + (i + 1) + ". " + step);
   });

}


// =======================
// TEST DATA - BUG 1
// =======================

logBug({
    id: 1,
    title: "VWO login is not working.",
    severity: "High",

    // Steps to reproduce the issue
    stepsToReproduce: [
        "Step 1: Open app.vwo.com",
        "Step 2: Enter invalid credentials",
        "Step 3: Verify the error message"
    ]
});


// =======================
// TEST DATA - BUG 2
// =======================

logBug({
    id: 2,
    title: "VWO login is not working with Arabic language",
    severity: "High",

    // Steps to reproduce the issue
    stepsToReproduce: [
        "Step 1: Open app.vwo.com",
        "Step 2: Switch language to Arabic",
        "Step 3: Enter invalid credentials",
        "Step 4: Verify the error message"
    ]
});