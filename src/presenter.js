import { TennisGame } from './tennisGame.js';

const game = new TennisGame();
const scoreDisplay = document.getElementById('scoreDisplay');
const btnP1 = document.getElementById('btnP1');
const btnP2 = document.getElementById('btnP2');
const btnReset = document.getElementById('btnReset');

function updateScore() {
  scoreDisplay.textContent = game.getScore();
}

btnP1.addEventListener('click', () => {
  game.player1Scores();
  updateScore();
});

btnP2.addEventListener('click', () => {
  game.player2Scores();
  updateScore();
});

btnReset.addEventListener('click', () => {
  game.reset();
  updateScore();
});

updateScore();