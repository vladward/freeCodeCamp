/*
Create Strings using Template Literals
 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const iter = arr.map(i => i)
    const failureItems = [
        `<li class="text-warning">${iter[0]}</li>`,
        `<li class="text-warning">${iter[1]}</li>`,
        `<li class="text-warning">${iter[2]}</li>`
    ];
    // Only change code above this line
    console.log(failureItems)
    return failureItems;
}

const failuresList = makeList(result.failure);