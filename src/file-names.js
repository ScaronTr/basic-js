const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  let slice;
  let counterCopy = 1;
  let counterCopyOfCopy = 1;

  for (let i = 0; i < names.length; i++) {
    if (i == 0) {
      slice = [];
      arr.push(names[0]);
    } else {
      slice = names.slice(0, i);
      if (slice.includes(names[i]) && arr.includes(names[i])) {
        arr.push(`${names[i]}(${counterCopy})`);
        ++counterCopy;
      }  else if (!slice.includes(names[i]) && arr.includes(names[i])) {
        arr.push(`${names[i]}(${counterCopyOfCopy})`);
        ++counterCopyOfCopy;
      } else if (!slice.includes(names[i] && !arr.includes(names[i]))) {
        arr.push(names[i]);
      }
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
