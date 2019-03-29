import Clue from './Clue.js';

class DailyDouble extends Clue {
  constructor(question, id, answer, pointValue) {
    super(question, id, answer, pointValue);
  }
  updateScore(newPointValue) {
    this.pointValue = parseInt(newPointValue)
  }
}

export default DailyDouble;