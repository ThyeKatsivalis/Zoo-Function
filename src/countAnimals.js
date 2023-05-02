const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  const animals = {};

  if (!animal) {
    species.forEach((specie) => {
      animals[specie.name] = Object.keys(specie.residents).length;
    });
    return animals;
  } if (animal && !animal.sex) {
    const animalName = species.filter((specie) => animal.species === specie.name);
    return animalName[0].residents.length;
  } if (animal.sex) {
    const animalName = species.find((specie) => animal.species === specie.name);
    const animalSex = animalName.residents.filter((resident) => animal.sex === resident.sex);
    return animalSex.length;
  }
};

// console.log(countAnimals());
// console.log(countAnimals({ species: 'giraffes' }));
// console.log(countAnimals({ species: 'giraffes', sex: 'male' }));

// const qualquercoisa = species.find((anarray) => anarray.residents === animal); console.log(qualquercoisa);
// console.log(species[0].name);
// console.log(countAnimals({ species: 'giraffes' }));

// console.log(data.species.length) // mostra o numero de especies no zológico // 9

// console.log(data.species[0].residents.length) // mostra o numero de residents no primeiro array // 4

// Grupo de consoles logs abaixo mostram quantidade de animais em outros arrays:

// console.log(data.species[1].residents.length)
// console.log(data.species[2].residents.length)
// console.log(data.species[3].residents.length)
// console.log(data.species[4].residents.length)
// console.log(data.species[5].residents.length)
// console.log(data.species[6].residents.length)
// console.log(data.species[7].residents.length)
// console.log(data.species[8].residents.length)

// console.log(data.species[0].residents[0].sex) // mostra o sexo do animal // female

// // grupo de console.logs que mostra o sexo dos animais no primeiro array de species:

// console.log(data.species[0].residents[1].sex)
// console.log(data.species[0].residents[2].sex)
// console.log(data.species[0].residents[3].sex)

// console.log que mostra o sexo dos animais no primeiro array de species: tudo junto

// console.log(data.species[0].residents[0].sex, data.species[0].residents[1].sex, data.species[0].residents[2].sex, data.species[0].residents[3].sex)

module.exports = countAnimals;
