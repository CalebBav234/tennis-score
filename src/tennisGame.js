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

  getScore() {
    if (this.p1 === 0 && this.p2 === 0) return 'Love-Love';
    if (this.p1 === 1 && this.p2 === 0) return '15-Love';
    if (this.p1 === 1 && this.p2 === 1) return '15-15';
    if (this.p1 === 2 && this.p2 === 1) return '30-15';
    if (this.p1 === 2 && this.p2 === 2) return '30-30';
    if (this.p1 === 3 && this.p2 === 2) return '40-30';
    return 'Unknown';
  }
}
export default TennisGame;
