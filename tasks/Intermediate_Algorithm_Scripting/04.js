/*
Wherefore art thou
 */

var srcKeys = Object.keys(source);

// filter the collection
function whatIsInAName(collection, source) {

    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    })
}