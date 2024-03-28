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

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Nhấn vào nút roll > xúc xắc xuát hiện, mỗi lần xúc thì sẽ hiện ra ảnh tương đương với sô trên xúc xắc
 * TODO 2) Nếu xúc xắc khác 1 > cộng thêm điểm cho người chơi đang đổ xúc xắc
 */
