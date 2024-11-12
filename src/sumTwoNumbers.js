/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let firstNumber1 = firstNumber.toString().replaceAll(' ', '');
  let secondNumber1 = secondNumber.toString().replaceAll(' ', '');
  return +firstNumber1 + +secondNumber1;
};
