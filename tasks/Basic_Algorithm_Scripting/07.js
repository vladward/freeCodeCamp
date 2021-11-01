/*
Repeat a String Repeat a String
 */

function repeatStringNumTimes(str, num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(str)
    }
    console.log(arr)
    return arr.join('');
}

console.log(repeatStringNumTimes("abc", 3));