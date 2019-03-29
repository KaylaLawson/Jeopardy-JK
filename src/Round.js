import domUpdates from './domUpdates.js';
import dataSet from './dataSet.js';

class Round {
  constructor(ids, clues, round) {
    this.clues = clues; 
    this.categoryIds = ids;
    this.playCounter = 3;
    this.round = round; 
    this.dailyDouble = 0;
    this.wager = 0;
  }
  renderCategories() {
    domUpdates.displayCategories(this.categoryIds); 
    this.dailyDoubleNum();
  }
  findClueById(id, pointVal, event, game, wager) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; 
    });
    domUpdates.renderClue(clueToRender, event, wager);
    this.trackRound(game);
    console.log(clueToRender.answer);

  }
  trackRound(game) {
    this.playCounter--;
    if (this.playCounter === 0) {
      this.round++;
      domUpdates.updateBoard(game, this.round)
      game.createRound(this.round);
    }
  }
  dailyDoubleNum() {
    this.dailyDouble = Math.floor((Math.random() * this.playCounter) + 1 ); 
  }
  checkDailyDouble(id, pointVal, event, game) {
    if (this.playCounter === this.dailyDouble) {
      console.log('do things');
      domUpdates.displayDailyDouble(game)
    } else {
      this.findClueById(id, pointVal, event, game);
    }
  }
  randomDD() {
    const dailyPick = dataSet.clues[(Math.floor(Math.random() * 114) + 1)];
    console.log(dailyPick)
    domUpdates.displayDailyDoubleQuestion(dailyPick);
  }
}


export default Round; 