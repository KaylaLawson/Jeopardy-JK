import chai from 'chai'
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble.js'

describe('DailyDouble', function() {
  let dailyDouble;
  beforeEach(function() {
    let mockClue = {
      question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
      pointValue: 100,
      answer: "golf",
      categoryId: 10
    }
    dailyDouble = new DailyDouble(mockClue);
  });
  it('should change string into number and update score', function() {
    expect(dailyDouble.pointValue).to.equal(100);
    dailyDouble.updateScore('6000');
    expect(dailyDouble.pointValue).to.equal(6000);
  });
})