class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
  }

  player1Scores() {
    this.p1++;
  }

  player2Scores() {
    this.p2++;
  }

  translate(p) {
    return ['Love', '15', '30', '40'][p] || 'Game';
  }

  getScore() {
    return `${this.translate(this.p1)}-${this.translate(this.p2)}`;
  }
}

export default TennisGame;
