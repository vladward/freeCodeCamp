/*
Use Destructuring Assignment to Assign Variables from Objects
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highTomorrow)

// Only change code above this line