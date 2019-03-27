import domUpdates from "./domUpdates";
import dataSet from "./dataSet";

class Round {
  constructor(ids, clues, round) {
    this.clues = clues; 
    this.categoryIds = ids;
    this.playCounter = 3;
    this.round = round;
    // this.categoryNames = [];
    // this.currentPlayer = {}; 
  }
  renderCategories() {
    domUpdates.displayCategories(this.categoryIds); 
    // console.log(this.categoryIds);
  }
  findClueById(id, pointVal, event, game) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; // could be stricly equal if parseInt id and pointVal
    })
    // console.log('pointval', pointVal)
    // console.log('id: ', id, 'val: ', pointVal);
    domUpdates.renderClue(clueToRender, event)
    this.trackRound(game)
     // drilling with (event) passing an object around 
  }
  trackRound(game) {
    this.playCounter--;
    // console.log('COUNTER', this.playCounter);
    if (this.playCounter === 0) {
      this.round++;
      // console.log('round numb', this.round)
      domUpdates.updateBoard(game, this.round)
      game.createRound(this.round);
      // console.log('new round')
    }
  }
}

export default Round; 