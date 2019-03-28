class Player {
  constructor(name, playerTurn = false) {
    this.name = name;
    this.score = 0;
    this.playerTurn = playerTurn;
  }
  updateScore(points, bool) {
    // bool ? this.score += points : this.score -= points;
    if (bool) {
      this.score += points
    } else {
      this.score -= points
    }
  }
}

export default Player;