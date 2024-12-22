/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError('Argument must be an array'));
    }

    let resolvedCount = 0;
    const results = [];

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject); // Reject the entire promise if any promise fails
    });

    // Handle empty array case
    if (promisesArray.length === 0) {
      resolve([]);
    }
  });
};
