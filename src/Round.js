import domUpdates from './domUpdates.js';
import dataSet from './dataSet.js';
import DailyDouble from './DailyDouble.js';

class Round {
  constructor(ids, clues, round) {
    this.clues = clues; 
    this.categoryIds = ids;
    this.playCounter = 16;
    this.round = round; 
    this.dailyDoubleNum = 0;
    this.dailyD = null;
  }
  renderCategories() {
    domUpdates.displayCategories(this.categoryIds); 
    this.getDailyDoubleNum();
  }
  findClueById(id, pointVal) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; 
    });
    return clueToRender;
  }
  displayClue(clueToRender, event, game) {
    domUpdates.renderClue(clueToRender, event);
    this.trackRound(game);
  }
  trackRound(game) {
    this.playCounter--;
    if (this.playCounter === 0) {
      this.round++;
      domUpdates.updateBoard(game, this.round)
      game.createRound(this.round);
    }
  }
  getDailyDoubleNum() {
    this.dailyDoubleNum = Math.floor((Math.random() * this.playCounter) + 1 ); 
  }
  checkDailyDouble(id, pointVal, event, game) {
    const clueToUse =  this.findClueById(id, pointVal);
    if (this.playCounter === this.dailyDoubleNum) {
      this.dailyD = new DailyDouble(clueToUse);
      domUpdates.displayDailyDouble(game)
      // logic for round two having 2 dds
    } else {
      this.displayClue(clueToUse, event, game)
    }
  }
}


export default Round; 