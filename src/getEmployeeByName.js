const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employeeByName = employees
    .find((e) => e.firstName === employeeName || e.lastName === employeeName);

  if (employeeByName) {
    return employeeByName;
  }

  return {};
};

module.exports = getEmployeeByName;
