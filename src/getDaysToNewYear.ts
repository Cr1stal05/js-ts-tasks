/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const parseDate = (date: Date | string): Date => {
    if (typeof date === 'string') {
      const parts = date.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid date format');
      }
      const day = Number(parts[0]);
      const month = Number(parts[1]);
      const year = Number(parts[2]);
      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        throw new Error('Invalid date');
      }
      return new Date(year, month - 1, day);
    }
    return date;
  };

  const target = parseDate(targetDate);
  if (isNaN(target.getTime())) {
    throw new Error('Invalid date');
  }

  const nextYear = target.getFullYear() + 1;
  const nextNewYear = new Date(nextYear, 0, 1);

  const diffTime = nextNewYear.getTime() - target.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
