import chai from 'chai'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['displayCategories', 'renderClue', 'updateBoard'], () => true);

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
    expect(domUpdates.renderClue).to.be.called();
  })

  it('should track round', function() {
    const game = new Game();

    expect(round.playCounter).to.equal(3);
    expect(round.round).to.equal(1);

    round.trackRound(game); 


    expect(round.playCounter).to.equal(2)

    round.trackRound(game);

    round.trackRound(game);

    expect(domUpdates.updateBoard).to.be.called();
    expect(round.round).to.equal(2);
  })
})