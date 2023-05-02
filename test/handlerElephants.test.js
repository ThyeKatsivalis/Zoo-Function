const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((currentSpecies) => currentSpecies.name === 'elephants');
const elephants = getElephants();

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const count = handlerElephants('count', elephants);
    expect(count).toStrictEqual(4);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const names = handlerElephants('names', elephants);
    expect(names).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('retorna a média de idade dos elefantes', () => {
    const averageAge = handlerElephants('averageAge', elephants);
    expect(averageAge).toStrictEqual(10.5);
  });
});

describe('Testes da função HandlerElephants', () => {
  it('Se o parâmetro for "undefined", retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Se o parâmetro não for uma string, retorna um aviso', () => {
    expect(handlerElephants(422)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa se caso escrito um parâmetro existente, ele apresenta o parâmetro esperado', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('Testa se caso seja escrito um parâmetro desconhecido, ele retorne "null"', () => {
    expect(handlerElephants('Daniel')).toBe(null);
  });
});
