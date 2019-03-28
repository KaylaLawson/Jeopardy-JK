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
    $(event.target).addClass("used");
    $('.clue-card').toggleClass("hidden");
    $('.clue-question').text(clue.question)
    $('.game-board, .start-game-form, h1').addClass("opacity");
    console.log('clue', clue)
  },
  disappearClue() {
    $('.game-board, .start-game-form, h1').removeClass("opacity");
  },
  checkAnswer(guess, game) {
    // reduce to find because we want the object
    const questionText = $('.clue-question');
    const currClue = game.findClue(questionText);
    if (currClue.answer.toLowerCase() === guess.toLowerCase()) {
      counter++;
      this.showCorrect(game);
      game.players[game.currentPlayer].updateScore(currClue.pointValue, true)
      $(`.score-${game.currentPlayer}`).text(game.players[game.currentPlayer].score)
    } else {
      this.showWrong();
      game.players[game.currentPlayer].updateScore(currClue.pointValue, false)
      $(`.score-${game.currentPlayer}`).text(game.players[game.currentPlayer].score)
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
  },
  updateBoard(game, round) {
    $('.round').text(`Round ${round}`)
    $('.val-btn').removeClass('used');
    console.log('this event', event);

    // $(event.target).on('click', game.round.findClueById());
  }
}