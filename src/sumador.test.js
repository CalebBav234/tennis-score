import sumar from './sumador.js';

describe('Sumar', () => {
  it('debería sumar dos números', () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it('debería lanzar error si los parámetros no son numéricos', () => { 
    expect(() => sumar('3', '2')).toThrow('Los parámetros deben ser numéricos');
  });
});
