const { isOpen } = require("./utils/auxiliaryFunc");

const date = new Date(2015, 1, 1, 22)

const test = isOpen(date);

console.log(test);