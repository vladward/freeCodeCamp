/*
Iterate Through the Keys of an Object with a for...in Statement
 */

function countOnline(usersObj) {
    // Only change code below this line

    let arr = 0;
    for (let user in usersObj) {
        if (usersObj[user].online) {
            arr++
        }
    }
    return arr

    // Only change code above this line
}
