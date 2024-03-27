'use strict';

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Điền giá trị nội dung cho phần tử
 *          ? có class "message" =  '🎉 Correct Number!'
 *          ? có class "number" =  '13'
 *          ? có class "score" =  '10'
 *          ? có class "guess" =  '23'
 */

// TODO 1)
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
