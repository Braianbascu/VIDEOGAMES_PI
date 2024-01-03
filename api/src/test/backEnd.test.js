const { conn, Videogame } = require('../db'); 

describe('Videogame Model Tests', () => {
    // Controles positivos
    it('debería ser un modelo', () => {
      const videogame = new videogame();
      expect(videogame instanceof Videogame).toBeTruthy();
    });
  
    it('la propiedad "created" debería ser siempre true', () => {
      const videogame = new videogame();
      expect(videogame.created).toBeTruthy();
    });
  
    // Controles negativos
    it('no debería ser undefined', () => {
      const videogame = new videogame();
      expect(videogame).toBeDefined();
    });
  
    it('la propiedad "created" no debería ser falsa', () => {
      const videogame = new videogame();
      expect(videogame.created).not.toBeFalsy();
    });

  });