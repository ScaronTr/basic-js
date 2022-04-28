const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let resultArr = [];
  outer: for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      ++i;
      continue outer;
    }
    if (arr[i] == '--discard-prev') {
      if (i != 0 && arr[i - 2] != '--discard-next') resultArr.pop();
      continue outer;
    }
    if (arr[i] == '--double-next') {
      if (i != arr.length - 1) resultArr.push(arr[i + 1]);
      continue outer;
    }
    if (arr[i] == '--double-prev') {
      if (i != 0 && arr[i - 2] != '--discard-next') resultArr.push(arr[i - 1]);
      continue outer;
    }
    resultArr.push(arr[i]);
  }
  return resultArr;

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  transform
};
