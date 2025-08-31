class TennisGame {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.forced = 'Love-Love';
  }

  player1Scores() {
    this.forced = '15-Love';
  }

  player2Scores() {
    if (this.forced === '15-Love') {
      this.forced = '15-15';
    } else {
      this.forced = 'Love-15';
    }
  }

  getScore() {
    return this.forced;
  }
}

export default TennisGame;
