class User {
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
      throw new TypeError('First name and second name must be strings.');
    }
    if (typeof age !== 'number') {
      throw new TypeError('Age must be a number.');
    }
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  set fName(newFirstName) {
    if (typeof newFirstName !== 'string') {
      throw new TypeError('First name must be string');
    }
    this.firstName = newFirstName;
  }
  set sName(newSecondName) {
    if (typeof newSecondName !== 'string') {
      throw new TypeError('Second name must be string');
    }
    this.secondName = newSecondName;
  }
  get name() {
    return `${this.firstName} ${this.secondName}`;
  }
  introduce() {
    return `My name is ${this.firstName} ${this.secondName}, I'm ${this.age}`;
  }
  celebrateBirthday() {
    this.age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(key => {
    const { firstName, secondName, age } = key;
    return new User(firstName, secondName, age);
  });
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(key => key.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    const comparator = TestUtils.getComparator.call();
    return users.sort(comparator);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  return users.map((user, i) => {
    if (i % 2 == 0) {
      user.celebrateBirthday();
    }
    return user;
  });
};
