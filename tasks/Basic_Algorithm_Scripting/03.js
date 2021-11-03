/*
Factorialize a Number
 */

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorialize(5));