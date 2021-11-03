/*
Truncate a String
 */

function truncateString(str, num) {
    let abs = str.substr(0, num);
    if (str.length > num) {
        return abs + '...'
    } else {
        return str
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));