/*
Iterate Over All Properties
 */

let ownProps = [];
let prototypeProps = [];

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop)
    } else {
        prototypeProps.push(prop)
    }
}

console.log(ownProps)
console.log(prototypeProps)

// Only change code below this line

