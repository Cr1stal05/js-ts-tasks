/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  if (typeof start === 'string') {
    return start;
  }
  if (typeof end === 'string') {
    return end;
  }
  let result = 0;
  if (start > end) {
    [start, end] = [end, start];
  }
  let i = start;
  while (i <= end) {
    result = result + i;
    i = i + 1;
  }
  return result;
};
