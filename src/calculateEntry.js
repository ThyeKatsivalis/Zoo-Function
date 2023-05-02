const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const people = {};
  const criancas = entrants.filter((person) => person.age < 18).length;
  people.child = criancas;
  const adultos = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  people.adult = adultos;
  const idosos = entrants.filter((person) => person.age >= 50).length;
  people.senior = idosos;
  return people;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrant = countEntrants(entrants);
  const valorCriancas = entrant.child * prices.child;
  const valorAdulto = entrant.adult * prices.adult;
  const valorIdosos = entrant.senior * prices.senior;
  const valorTotal = valorCriancas + valorAdulto + valorIdosos;
  return valorTotal;
};

// console.log(countEntrants([{ name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 }]));

// console.log(calculateEntry([{ name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 }]));

module.exports = { calculateEntry, countEntrants };
