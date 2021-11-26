/*
Use the every Method to Check that Every Element in an Array Meets a Criteria
 */

function checkPositive(arr) {
    // Only change code below this line

    let neww = arr.every(function(currentValue) {
        return currentValue > 0;
    });
    return neww
    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]))