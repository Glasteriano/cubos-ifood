const { checkPromo } = require("./utils/auxiliaryFunc");

const start = new Date(2023, 4, 1);
const consumer = new Date(2023, 4, 23);

const result = checkPromo(start, consumer);

console.log(result)