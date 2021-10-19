/*
Check For The Presence of an Element With indexOf()
 */

function quickCheck(arr, elem) {
    // Only change code below this line
    let ind = arr.indexOf(elem);
    if(ind >= 0) {
        return true
    } else {
        return false
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
