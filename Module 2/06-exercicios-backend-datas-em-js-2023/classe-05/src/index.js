const { isOpen } = require("./utils/auxiliaryFunc");

const date = new Date(2021, 3, 24, 9, 30)

const test = isOpen(date);

console.log(test);