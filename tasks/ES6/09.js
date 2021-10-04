/*
Use the Rest Parameter with Function Parameters
 */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}