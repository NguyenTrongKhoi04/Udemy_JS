'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // TODO 1)
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../img/dice-${dice}.png`;

  // TODO 2)
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    console.log('kohi');
    currentScore += dice;
    console.log(currentScore);
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
    console.log('tạm thời để trống 😘');
  }
});
