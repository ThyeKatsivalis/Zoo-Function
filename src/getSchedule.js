const data = require('../data/zoo_data');

const zooSched = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins',
      'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const getSchedule = (scheduleTarget) => {
  if (data.species.find((specie) => specie.name === scheduleTarget)) {
    const animalSpecie = data.species.find((specie) => specie.name === scheduleTarget);
    return animalSpecie.availability;
  }
  if (zooSched[scheduleTarget]) {
    return { [scheduleTarget]: zooSched[scheduleTarget] };
  }
  if (!scheduleTarget || !zooSched[scheduleTarget]) return zooSched;
};

// console.log(getSchedule());
console.log(getSchedule('lions'));
// console.log(getSchedule('Monday'));
// console.log(data.species[0].availability); log que retorna os dias da semana

module.exports = getSchedule;
