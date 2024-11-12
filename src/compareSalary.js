/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let max;
  let min;
  if (firstSalary > secondSalary && firstSalary > thirdSalary) {
    max = firstSalary;
  } else if (secondSalary > firstSalary && secondSalary > thirdSalary) {
    max = secondSalary;
  } else {
    max = thirdSalary;
  }
  if (firstSalary < secondSalary && firstSalary < thirdSalary) {
    min = firstSalary;
  } else if (secondSalary < firstSalary && secondSalary < thirdSalary) {
    min = secondSalary;
  } else {
    min = thirdSalary;
  }
  let result = max - min;
  return result;
};
