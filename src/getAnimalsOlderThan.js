const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (specie, age) => {
  const animal = species.find((s) => s.name === specie);
  const animalsOlderThan = animal.residents.filter((r) => r.age >= age);
  return animal.residents.length === animalsOlderThan.length;
};

getAnimalsOlderThan('lions', 8);

module.exports = getAnimalsOlderThan;
