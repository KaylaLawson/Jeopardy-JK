import $ from 'jquery';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

import './css/normalize.css';
import './css/base.css';
import './css/landingPage.css';

const $startGameBtn = $(".start-game-btn");
const $valBtn = $(".val-btn");
const $guessBtn = $("#submit");
const $closeBtn = $("#close");
const $ddBtn = $('#dd-btn');

let game;

$startGameBtn.click(function(event) {
  event.preventDefault()
  const names = [$('#input-0').val(), $('#input-1').val(), $('#input-2').val()]
  game = new Game;
  game.createPlayers(names);
  game.startGame();
});

$valBtn.on("click", function(event) {
  event.preventDefault();
  const {id, innerText} = event.target;
  game.round.checkDailyDouble(id, innerText, event, game);
  $(event.target).addClass("used");
});

$guessBtn.click(function(event) {
  const guess = $('#guess-input').val();
  domUpdates.checkAnswer(guess, game);
})

$closeBtn.click(function(event) {
  event.preventDefault();
  $('.clue-card').toggleClass('hidden');
  $('#submit').removeClass('hidden');
  $('#guess-input').val('');
  $('.answer').text('Guess below!');
  $('#close').addClass('hidden');
  domUpdates.disappearClue();
  game.changePlayer();
  domUpdates.indicatePlayer(game);
})
$ddBtn.click(function(event) {
  event.preventDefault();
  $('.dd').addClass('hidden');
  const wager = $('.dd-input').val();
  game.round.dailyD.updateScore(wager);
  game.round.displayClue(game.round.dailyD, event, game); 
})




