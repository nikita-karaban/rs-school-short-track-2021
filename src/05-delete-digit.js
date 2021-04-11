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
  const num = n.toString().split('');
  const min = Math.min(...num).toString();
  const index = num.indexOf(min) + 1;
  const result = num.splice(index).join('');
  return result;
}

module.exports = deleteDigit;
