import TennisGame from './tennisGame';

describe('TennisGame', () => {
  let game;

  beforeEach(() => {
    game = new TennisGame();
  });

  test('should start with love-love', () => {
    expect(game.getScore()).toBe('Love-Love');
  });
});