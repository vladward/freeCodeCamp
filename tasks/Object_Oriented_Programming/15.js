/*
Understand Where an Object’s Prototype Comes From
 */

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
// Only change code below this line

