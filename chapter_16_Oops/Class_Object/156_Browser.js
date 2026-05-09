// Class representing a Browser
class Browser {

    // Parameterized constructor → initializes values
    constructor(name) {
        this.name = name;      // browser name (Chrome/Firefox)
        this.isOpen = true;    // browser is open by default
        console.log(name + " launched"); // print when object is created
    }

    // Behaviour → start browser
    startBrowser() {
        console.log(this.name + " is starting");
    }

    // Behaviour → close browser
    closeBrowser() {
        this.isOpen = false; // update state
        console.log(this.name + " is closing");
    }
}

// Creating objects
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

// Accessing property
console.log(chrome.isOpen); // true


