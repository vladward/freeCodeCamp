/*
Add Items Using splice()
 */

function htmlColorNames(arr) {
    // Only change code below this line
    const startIndex = 0;
    const amountToDelete = 2;
    arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));