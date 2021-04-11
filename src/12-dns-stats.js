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
  const regex = /[a-z]+/g;
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].match(regex).reverse();
    for (let j = 1; j <= domain.length; j++) {
      const name = `.${domain.slice(0, j).join('.')}`;
      if (obj[name]) {
        obj[name]++;
      } else {
        obj[name] = 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
