const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let key;

  for (let item of domains) {
    item = item.split('.');
    item.reverse();
    key = '';

    for (let i = 0; i < item.length; i++) {
      key += `.${item[i]}`;
      if (!obj[key]) {
        obj[key] = 1;
      } else obj[key] += 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
