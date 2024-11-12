/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let k = Math.abs(n).toString().split('');
  let i = 0;
  let result = 0;
  while (i < k.length) {
    result = result + +k[i];
    i = i + 1;
  }
  return result;
};
