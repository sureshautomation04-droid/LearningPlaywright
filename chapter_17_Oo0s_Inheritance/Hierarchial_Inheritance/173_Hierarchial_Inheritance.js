//Hierarchial_Inheritanc
// 🔹 Parent Class
class Father {
    constructor(name) {
        this.name = name;
    }

    showProperty() {
        console.log(this.name + " has a house and land");
    }
}


// 🔹 Child Class 1
class Son1 extends Father {
    showBusiness() {
        console.log(this.name + " runs a software company");
    }
}


// 🔹 Child Class 2
class Son2 extends Father {
    showJob() {
        console.log(this.name + " works as a doctor");
    }
}


// 🔹 Create objects
let s1 = new Son1("Ravi");
let s2 = new Son2("Kumar");


// 🔹 Method calls

// Son1 object
s1.showProperty(); // Inherited from Father
s1.showBusiness(); // Own method

console.log("-----");

// Son2 object
s2.showProperty(); // Inherited from Father
s2.showJob(); // Own method