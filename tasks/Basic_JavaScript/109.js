//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}









