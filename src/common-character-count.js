const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = [];
  let bigger;
  let smaller; 
  if (s1.length >= s2.length) {
    bigger = s1;
    smaller = s2;
  } else {
    bigger = s2;
    smaller = s1;
  }

  for (let char of bigger) {
    if (smaller.includes(char)) {
      arr.push(char);
      smaller = smaller.slice(0, smaller.indexOf(char)) + smaller.slice(smaller.indexOf(char) + 1);
    }
  }

  return arr.length;
}

module.exports = {
  getCommonCharacterCount
};
