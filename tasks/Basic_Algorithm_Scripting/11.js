/*
Title Case a Sentence
*/

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

console.log(titleCase("I'm a little tea pot"));