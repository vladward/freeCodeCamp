/*
Search and Replace
 */

function myReplace(str, before, after) {
    function applyCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        return targetArr.join("");
    }
    return str.replace(before, applyCasing(before, after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");