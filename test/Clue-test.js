import chai from 'chai'
const expect = chai.expect;

import Clue from '../src/Clue.js';

describe('Clue', function() {
  it('should have default properties', function() {
    let mockClue = {question: "Hello", id: 4, answer: "bye", pointValue: 200 }
    let clue = new Clue(mockClue);
    expect(clue.question).to.equal('Hello');
  })
});
