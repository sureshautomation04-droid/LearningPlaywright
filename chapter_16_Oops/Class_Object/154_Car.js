class Car {
    // Attribute
    // Constructor
    constructor(assigned_name) {
        this.name = assigned_name;
    }

    drive() {
        console.log("Driving the car "+this.name);
    }
    printDetailsCar() {
        console.log("Details of  the car "+this.name);
    }
}   

let hydai_car = new Car("i20");
hydai_car.drive();
hydai_car.printDetailsCar();