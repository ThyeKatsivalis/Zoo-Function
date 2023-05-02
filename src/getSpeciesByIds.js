const data = require('../data/zoo_data');

const getSpeciesByIds = (...id) =>
  data.species.filter((animal) => id.includes(animal.id));

module.exports = getSpeciesByIds;
