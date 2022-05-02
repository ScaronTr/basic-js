const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let maxDepth = 0;
    let iteratorDepth = 0;

    if (arr.length == 0) return 1;
    if (arr.length == 1) {
      depth += 1;
      return (Array.isArray(arr[0])) ? depth += this.calculateDepth(arr[0]) : 1;
    } else {
      depth += 1;
      iteratorDepth = depth;
      for (let item of arr) {
        depth = iteratorDepth;
        if (Array.isArray(item)) depth += this.calculateDepth(item);
        if (maxDepth < depth) maxDepth = depth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
