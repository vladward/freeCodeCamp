/*
Remove Elements from an Array Using slice Instead of splice
 */

function nonMutatingSplice(cities) {
    // Only change code below this line
    let copy = [...cities]
    return copy.slice(0, 3);

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));