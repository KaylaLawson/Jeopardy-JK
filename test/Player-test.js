import chai from 'chai'
const expect = chai.expect;

import Player from '../src/Player.js'

describe ('Player', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('should have default properties', function() {
    let player = new Player('Kayla')
    expect(player.name).to.equal('Kayla');
    expect(player.score).to.equal(0);
    // expect(player.playerTurn).to.equal(false);
  });

  it ('should update score', function() {
    let points = 100;
    let bool = true;

    expect(player.score).to.equal(0);

    player.updateScore(points, bool);

    expect(player.score).to.equal(100);

  })
})