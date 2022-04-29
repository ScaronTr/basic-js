const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str != 'string') str = `${str}`;
  if (options.addition !== undefined) options.addition = `${options.addition}`;
  let result = '';
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';

  if (options.addition) {
    if (options.additionRepeatTimes && options.additionRepeatTimes != 1) {
      str += options.addition + options.additionSeparator;
    } else str += options.addition;
  }
  if (options.additionRepeatTimes) {
  
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      if (i == options.additionRepeatTimes - 1) {
        str += options.addition;
      } else str += options.addition + options.additionSeparator;
    }
  }

  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      if (i == options.repeatTimes) {
        result += str;
      } else result += str + options.separator;
    }
    return result;
  }
  return str;
}

module.exports = {
  repeater
};
