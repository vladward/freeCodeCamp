//Practice comparing different values

// Setup
function compareEquality(a, b) {
    if (typeof a === typeof b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");