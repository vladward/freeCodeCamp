/*
Split a String into an Array Using the split Method
 */

function splitify(str) {
    // Only change code below this line

    let newStr =  str.split(/\W/)
    return newStr
    // Only change code above this line
}

console.log(splitify("Hello World,I-am code"))