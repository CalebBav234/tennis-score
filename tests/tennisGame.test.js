import TennisGame from '../src/tennisGame.js';
test('Marcador inicial es Love-Love', () => {
  const game = new TennisGame();
  expect(game.getScore()).toBe('Love-Love');
});
