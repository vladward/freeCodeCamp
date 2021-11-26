/*
Use the some Method to Check that Any Elements in an Array Meet a Criteria
 */

function checkPositive(arr) {
    // Only change code below this line

    let neww = arr.some(function(currentValue) {
        return currentValue > 0;
    });
    return neww
    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);