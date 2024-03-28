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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../img/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 1 ? 0 : 1;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO: hoàn thành các yêu cầu sau
 *        ? Khi user nhấn hold => điểm ng đó được giữ vào `score--${id người chơi}` > user còn lại được chơi
 *        ? ai chơi đc hơn 20 diểm rồi nhấn hold =>> end game > winnercó background đen
 *        ? khi biết đc winner > ko thể tiếp tục chơi
 */
