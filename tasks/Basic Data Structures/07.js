/*
Copy Array Items Using slice()
 */

function forecast(arr) {
    // Only change code below this line
    let newArr = arr.slice(2, 4)
    return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));