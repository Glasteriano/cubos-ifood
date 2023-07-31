const { isOpen } = require("./utils/auxiliaryFunc");

const date = new Date(2021, 3, 26, 7, 59)

const test = isOpen(date);

console.log(test);