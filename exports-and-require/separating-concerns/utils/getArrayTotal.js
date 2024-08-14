function getArrayTotal(arr) {
  const total = arr.reduce((total, num) => {
    return total + num;
  }, 0);
  return total;
}
module.exports = getArrayTotal;
const arr = require(`../0`)
const total = getArrayTotal(arr);
console.log(`The array has a total of ${total}`);