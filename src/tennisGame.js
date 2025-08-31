class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.hasScored = false;
  }

  player1Scores() {
    this.hasScored = true;
  }

  getScore() {
    if (this.hasScored) {
      return '15-Love';
    }
    return 'Love-Love';
  }
}

export default TennisGame;
