'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * * vào phần 7 trên folder data_cource để chạy demo
 * TODO 1) Set up kết quả của 2 người chơi = 0
 * TODO 2) DÙng JS để ẩn con xúc xắc
 */

// TODO 1)
score0El.textContent = 0;
score1El.textContent = 0;

// TODO 2)
diceEl.classList.add('hidden');
