// Define a class Person
class Person {

    // Private fields (cannot be accessed outside the class)
    #child1;
    #child2;

    // Constructor → runs when object is created
    constructor(name, ch1, ch2) {
        this.name = name;      // Public property
        this.#child1 = ch1;    // Private property
        this.#child2 = ch2;    // Private property
    }

    // Getter method → used to access private field #child1
    getChild1() {
        return this.#child1;
    }

    // Setter method → used to update private field #child1
    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

// Creating object of Person class
let p = new Person("Pramod", "Vrad", "Jenny");

// Accessing public property → works fine
console.log(p.name); 
// Output: Pramod

// Trying to access private field directly → ERROR ❌
// console.log(p.#child1); 

// Accessing private field using getter → ✅
console.log(p.getChild1()); 
// Output: Vrad

// Updating private field using setter → ✅
p.setChild1("VIRAD");

// Verify updated value using getter
console.log(p.getChild1()); 
// Output: VIRAD