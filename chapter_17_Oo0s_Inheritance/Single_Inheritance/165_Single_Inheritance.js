class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating")
    }

    sleep() {
        console.log(this.name +" is sleeping")
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking")
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat(); // Rex is eating
dog.sleep(); // Rex is sleeping
dog.bark(); // Rex  is barking
console.log(dog.breed); // Labrador