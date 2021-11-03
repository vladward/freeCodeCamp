/*
Where do I Belong
*/

function getIndexToIns(arr, num) {
    return arr.filter(i => num > i).length;
}

console.log(getIndexToIns([40, 60], 50));