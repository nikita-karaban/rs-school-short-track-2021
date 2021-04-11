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
  const arr = [...str];
  let count = 1;
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      string += count > 1 ? count + arr[i] : arr[i];
      count = 1;
    }
  }
  return string;
}

module.exports = encodeLine;
