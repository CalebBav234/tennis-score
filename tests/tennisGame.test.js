import TennisGame from '../src/tennisGame.js';
test('Marcador inicial es Love-Love', () => {
  const game = new TennisGame();
  expect(game.getScore()).toBe('Love-Love');
});
test('Player 1 anota una vez → 15-Love', () => {
  const game = new TennisGame();
  game.player1Scores();
  expect(game.getScore()).toBe('15-Love');
});
