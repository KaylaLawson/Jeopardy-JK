import Round from './Round';
import domUpdates from './domUpdates.js'

class DailyDouble extends Round {
  constructor(question, answer, pointValue) {
    super(question, answer, pointValue);
  }
  updateScore(newPointValue) {
    this.pointValue = parseInt(newPointValue)
  }

}

export default DailyDouble;