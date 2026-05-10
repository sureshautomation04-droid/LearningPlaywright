// Define a class ICICI (Bank Account Example)
class ICICI {

    // Private field → cannot be accessed outside the class
    #balance;

    // Constructor → initializes object when created
    constructor(name, balance) {
        this.name = name;        // Public property (account holder name)
        this.#balance = balance; // Private property (account balance)
    }

    // Getter method → used to read private balance safely
    getBalance() {
        return this.#balance;
    }

    // Setter method → used to update balance with permission check
    setBalance(balance, isCashier) {

        // Only allow update if person is cashier (authorization check)
        if (isCashier) {
            this.#balance = balance; // Update private balance
        } else {
            console.log("Not allowed"); // Block unauthorized access
        }
    }
}

// Create first account object
let pramod = new ICICI("Pramod", 1000);

// Access balance using getter
console.log(pramod.getBalance()); 
// Output: 1000

// Try to update balance WITHOUT permission
pramod.setBalance(10000000, false); 
// Output: Not allowed

// Balance remains unchanged
console.log(pramod.getBalance()); 
// Output: 1000


// Create second account object
let pramod_father = new ICICI("Pramod", 2000);

// Access initial balance
console.log(pramod_father.getBalance()); 
// Output: 2000

// Update balance WITH permission (cashier = true)
pramod_father.setBalance(300000, true);

// Balance successfully updated
console.log(pramod_father.getBalance()); 
// Output: 300000