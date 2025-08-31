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
test('Ambos jugadores anotan una vez → 15-15', () => {
  const game = new TennisGame();
  game.player1Scores();
  game.player2Scores();
  expect(game.getScore()).toBe('15-15');
});
test('Player 1 anota dos veces, Player 2 una vez → 30-15', () => {
  const game = new TennisGame();
  game.player1Scores();
  game.player1Scores(); 
  game.player2Scores();
  expect(game.getScore()).toBe('30-15');
});
test('Player 1 y Player 2 anotan dos veces → 30-30', () => {
  const game = new TennisGame();
  game.player1Scores();
  game.player1Scores(); 
  game.player2Scores(); 
  game.player2Scores(); 
  expect(game.getScore()).toBe('30-30');
});
test('Player 1 anota tres veces, Player 2 dos veces → 40-30', () => {
  const game = new TennisGame();
  game.player1Scores(); 
  game.player1Scores(); 
  game.player1Scores(); 
  game.player2Scores(); 
  game.player2Scores(); 
  expect(game.getScore()).toBe('40-30');
});
test('Player 1 y Player 2 anotan tres veces → Deuce', () => {
  const game = new TennisGame();
  game.player1Scores(); 
  game.player1Scores(); 
  game.player1Scores(); 
  game.player2Scores(); 
  game.player2Scores(); 
  game.player2Scores(); 
  expect(game.getScore()).toBe('Deuce');
});