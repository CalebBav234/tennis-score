class TennisGame {
  constructor() {
    this.p1Points = 0;
    this.p2Points = 0;
  }

  player1Scores() {
    this.p1Points++;
  }

  player2Scores() {
    this.p2Points++;
  }

  getScore() {
    const p1 = this.p1Points;
    const p2 = this.p2Points;

    if (p1 >= 3 && p2 >= 3 && p1 === p2) {
      return 'Deuce';
    }

    
    if (p1 >= 4 && p1 === p2 + 1) {
      return 'Advantage Player 1';
    }
    if (p2 >= 4 && p2 === p1 + 1) {
      return 'Advantage Player 2';
    }

    if (p1 >= 4 && p1 >= p2 + 2) {
      return 'Game for Player 1';
    }
    if (p2 >= 4 && p2 >= p1 + 2) {
      return 'Game for Player 2';
    }

    return `${this.translate(p1)}-${this.translate(p2)}`;
  }

  translate(points) {
    const labels = ['Love', '15', '30', '40'];
    return labels[points] || 'Error';
  }
}
export default TennisGame;
