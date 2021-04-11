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
  let result = 0;
  let str1 = s1;
  let str2 = s2;

  while (str1.length && str2.length) {
    if (str2.includes(str1.charAt(0))) {
      result++;
      str2 = str2.slice(1);
      str1 = str1.slice(1);
    } else {
      str1 = str1.slice(1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
