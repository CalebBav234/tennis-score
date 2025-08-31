export class TennisGame {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }

  reset() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  getScore() {
    const scoreNames = ['Love', '15', '30', '40'];
    if (this.player1Points === this.player2Points) {
      return this.player1Points >= 3 ? 'Deuce' : `${scoreNames[this.player1Points]}-${scoreNames[this.player2Points]}`;
    }

    if (this.player1Points >= 4 || this.player2Points >= 4) {
      const diff = this.player1Points - this.player2Points;
      if (diff === 1) return 'Advantage Player 1';
      if (diff === -1) return 'Advantage Player 2';
      if (diff >= 2) return 'Game for Player 1';
      if (diff <= -2) return 'Game for Player 2';
    }

    return `${scoreNames[this.player1Points]}-${scoreNames[this.player2Points]}`;
  }
}
export default TennisGame;
