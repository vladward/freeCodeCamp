/*
Use Prototype Properties to Reduce Duplicate Code
 */

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4

// Only change code above this line
let beagle = new Dog("Snoopy");

