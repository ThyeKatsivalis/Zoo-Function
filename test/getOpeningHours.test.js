const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se caso a função não receber parâmetro, ela retorna o cronograma geral', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Testa se caso a função receba segunda-feira como parâmetro, retorne que estará fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Testa se caso a função receba um parâmetro de um horário que está fechado e retorne que estará fechado', () => {
    expect(getOpeningHours('Wednesday', '07:00-AM')).toEqual('The zoo is closed');
  });

  it('Testa se caso a função receba um parâmetro num horário que está aberto retorne que estará aberto', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toEqual('The zoo is open');
  });

  it('Testa se caso a função receba um parâmetro escrito fora do padrão, retorne um aviso', () => {
    const actual = ('thu', '09:00-AM');
    expect(() => getOpeningHours(actual)).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Testa se a hora foi escrita corretamente', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Testa se os minutos foram escritos corretamente', () => {
    expect(() => getOpeningHours('Wednesday', '12:70-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Testa se a hora está escrita em números', () => {
    expect(() => getOpeningHours('Wednesday', '1e:70-AM')).toThrow('The hour should represent a number');
  });

  it('Testa se o AM ou o PM estão escritos corretamente', () => {
    expect(() => getOpeningHours('Wednesday', '12:00-JK')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
