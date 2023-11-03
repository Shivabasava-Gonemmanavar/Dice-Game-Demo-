'use strict';
//selecting elements

//1st part(making all number into  0 and hide the dice img as hidden by the help display style proprtices and classlist that it(: ..

const player0El = document.querySelector('.player--0 ');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');

const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; //final scores
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//2nd part (Rolling the dice) function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.genarating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    //2. dispaly dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled 1: if true,
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // console.log(currentScore);

    // current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');
    switchPlayer();
  }
});

//function for btn hold event

btnHold.addEventListener('click', function () {
  if (playing) {
    //1 .add current score to avtive player score
    scores[activePlayer] += currentScore;

    // console.log(scores[activePlayer]);

    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if the player score is >=100

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }

    //3.finish the game

    //switch the() player
  }
});
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El = textContent = 0;
  current1El = textContent = 0;
  player0El.classList.add('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});
