const { employees } = require('../data/zoo_data');

const getSubordinadosByManager = (manager) =>
  employees.filter(((e) => e.managers.includes(manager)));

const isManager = (id) => getSubordinadosByManager(id).length > 0;

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const subordinados = getSubordinadosByManager(managerId);
    return subordinados.map((s) => `${s.firstName} ${s.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
