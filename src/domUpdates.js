import $ from 'jquery';
import dataSet from './dataSet.js';
import Game from './Game.js';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    });
  },
  displayCategories(categories) { // little array of four
    const categoryTitles = [ 'United States History',
      'Life Sciences', 'Public Health', 'Education Jargon', 'Name That Board Game',
      'American Literature', 'Biographies', 'American Cities', 'Food',
      'Cable TV' ];
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(`${categoryTitles[category - 1]}`);
      $(`.val-btn.${index}`).attr('id', category)
    })
  },
  renderClue(clue, event) {
    $(event.target).addClass("used").off("click").text('');
    $('.clue-card').toggleClass("hidden");
    $('.clue-question').text(clue.question)
    $('.game-board, .start-game-form, h1').addClass("opacity");
    console.log('clue', clue)
  },
  disappearClue() {
    $('.game-board, .start-game-form, h1').removeClass("opacity");
  },
  checkAnswer() {
    const questionText = $('.clue-question');
    const guess = $('#guess-input').val();
    const answer = dataSet.clues.reduce((acc, currClue) => {
      if (questionText.text() === currClue.question) {
        acc += currClue.answer;
      }
      return acc;
    }, '')
    if (answer.toLowerCase() === guess.toLowerCase()) {
      this.showCorrect();
    } else {
      this.showWrong();
    }
  },
  showCorrect() {
    $('.answer').removeClass('hidden').text('Correct!');
    $('#submit').addClass('hidden');
    $('#close').removeClass('hidden');
  },
  showWrong() {
    $('.answer').removeClass('hidden').text('Wrong!');
    $('#submit').addClass('hidden');
    $('#close').removeClass('hidden');
  },
  changeScore(pointVal) {
    console.log(pointVal);
    // if (checkAnswer)
    // game.players[game.currentPlayer].score += pointVal
  },
  indicatePlayer(game) {
    if (game.currentPlayer === 0) {
      $('.player-0').addClass('white');
      $('.player-2').removeClass('white');
    }
    if (game.currentPlayer === 1) {
      $('.player-1').addClass('white');
      $('.player-0').removeClass('white');
    }
    if (game.currentPlayer === 2) {
      $('.player-2').addClass('white');
      $('.player-0').removeClass('white');
      $('.player-1').removeClass('white');
    }
  },
  playerOneTurn(game) {
    if(game.currentPlayer === 0) {
      $('.player-0').addClass('white');
      $('.player-2').removeClass('white');
    }
  }
}