import domUpdates from "./domUpdates";
import dataSet from "./dataSet";

class Round {
  constructor(ids, clues, round) {
    this.clues = clues; 
    this.categoryIds = ids;
    this.playCounter = 3;
    this.round = round; 
  }
  renderCategories() {
    domUpdates.displayCategories(this.categoryIds); 
  }
  findClueById(id, pointVal, event, game) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; // could be stricly equal if parseInt id and pointVal
    })
    domUpdates.renderClue(clueToRender, event)
    this.trackRound(game)
  }
  trackRound(game) {
    this.playCounter--;
    if (this.playCounter === 0) {
      this.round++;
      domUpdates.updateBoard(game, this.round)
      game.createRound(this.round);
    }
  }
}

export default Round; 