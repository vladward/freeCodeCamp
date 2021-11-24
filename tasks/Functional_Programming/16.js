/*
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
 */

const squareList = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
    }, []);
};