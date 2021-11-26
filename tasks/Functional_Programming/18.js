/*
Return a Sorted Array Without Changing the Original Array
 */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line

    let newArr = [...arr]
    let compFnn = (a, b) => a - b
    return newArr.sort(compFnn)
    // Only change code above this line
}

nonMutatingSort(globalArray);