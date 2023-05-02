const data = require('../data/zoo_data');

const { species, employees } = data;

const lookupAnimal = (animals) => {
  const responsibleFor = [];

  for (let index = 0; index < animals.length; index += 1) {
    const element = animals[index];
    responsibleFor.push(species.find(((s) => s.id === element)));
  }

  return responsibleFor;
};

function convertObject(object) {
  const animal = lookupAnimal(object.responsibleFor);
  return {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: animal.map((a) => a.name),
    locations: animal.map((a) => a.location),
  };
}

const getEmployeesCoverage = (employee) => {
  if (!employee) {
    return employees.map((element) => convertObject(element));
  }
  let result;
  if (employee.id) {
    result = employees.find((e) => e.id === employee.id);
  }
  if (employee.name) {
    result = employees.find((el) => el.firstName === employee.name
      || el.lastName === employee.name);
  }
  if (!result) {
    throw new Error('Informações inválidas');
  }
  return convertObject(result);
};

module.exports = getEmployeesCoverage;
