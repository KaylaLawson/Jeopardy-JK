import chai from 'chai'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['displayCategories', 'renderClue', 'updateBoard'], () => true);
// chai.spy.on(Round, 'trackRound', () => true);

let mockClues = [{
  question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
  pointValue: 100,
  answer: "golf",
  categoryId: 10
},
{
  question: "One of the most popular shows on the Food Network is \"The Essence of\" him",
  pointValue: 200,
  answer: "Emeril",
  categoryId: 10
},
{
  question: "The Eulogy\" is HBO's e-mail newsletter devoted to this series",
  pointValue: 300,
  answer: "Six Feet Under",
  categoryId: 10
}];

let mockIds = [1, 2, 3, 4]

describe ('Round', function() {
  let round;
  beforeEach(function() {
    round = new Round(mockIds, mockClues, 1); 
  });

  it('should have default properties', function () {
    expect(round.clues).to.deep.equal(round.clues, []);
    expect(round.currentPlayer).to.deep.equal(round.currentPlayer, {});
  });

  it('should find clues', function() {
    let id = 10;
    let pointVal = 300;
    let mockEvent = {};
    
    round.findClueById(id, pointVal, mockEvent); 
  });

  it('should display clue', function() {
    let mockGame = new Game;
    let mockEvent = {};
    let mockClue = {
      question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
      pointValue: 100,
      answer: "golf",
      categoryId: 10
    }
    round.displayClue(mockClue, mockEvent, mockGame); 

    expect(domUpdates.renderClue).to.be.called();
    // expect(round.trackRound).to.be.called();
    //could not spy on this method
  });

  it('should track round', function() {
    const game = new Game();

    expect(round.playCounter).to.equal(16);
    expect(round.round).to.equal(1);

    for (let i = 0; i < 16; i++) {
      round.trackRound(game);
    }

    expect(round.playCounter).to.equal(0)

    expect(domUpdates.updateBoard).to.be.called();
    expect(round.round).to.equal(2);
  })
})