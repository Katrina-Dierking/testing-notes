//process.argv process is a global object that none creates for you that gives you information about the process node is running (argv is an array of arguments)
const { sum } = require("/mathFunctions");

let first = parseInt(process.argv[2]);
let second = parseInt(process.argv[3]);

console.log(sum(first, second));

module.exports = {
  sum //sum: sum
};
