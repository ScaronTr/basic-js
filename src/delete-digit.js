const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    i == 0 ?  arr.push(n.slice(i + 1)) : arr.push(n.slice(0, i) + n.slice(i + 1)) ;
  }
  return Math.max(...arr);

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
