const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arrOfChar = [];
  let arrOfValue = [];
  let b = 0;
  let result = [];

  for(let i = 0; i < str.length; i++) {
    if (str[i] != str[i - 1]) {
      arrOfChar.push(str[i]);
    }
    if (str[i] == str[i + 1]) {
      if (arrOfValue[b] === undefined) {
        arrOfValue[b] = 1;
      }
      arrOfValue[b] += 1;
    } else {
      if (arrOfValue[b] === undefined) {
        arrOfValue[b] = 1;
      }
      ++b;
    }
  }

  for (let i = 0; i < arrOfChar.length; i++) {
    if (arrOfValue[i] == 1) {
      result.push(arrOfChar[i])
    } else {
      result.push(`${arrOfValue[i] + arrOfChar[i]}`)
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
