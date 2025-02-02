/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
type User = {
  name: string;
  login: string;
  surname?: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
  address?: {
    officeId: number;
    placeId: number;
  };
  contractorCompanyName?: string;
};

type UserGroups = {
  employees: User[];
  contractors: User[];
};

module.exports.groupUsers = function (users: User[]): UserGroups {
  const groupedUsers: UserGroups = {
    employees: [],
    contractors: [],
  };

  users.forEach(user => {
    if (user.type === 'EMPLOYEE') {
      groupedUsers.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      groupedUsers.contractors.push(user);
    }
  });

  return groupedUsers;
};
