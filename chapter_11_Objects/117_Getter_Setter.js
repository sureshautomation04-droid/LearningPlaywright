const user = {
    firstName: "Pramod",
    lastName: "Dutta",

    // Getter → acts like a property
    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    // Setter → splits and assigns values
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName); 
// "Pramod Dutta"

user.fullName = "Amit Sharma";

console.log(user.fullName); 
// "Amit Sharma"