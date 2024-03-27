'use strict';

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) tạo 1 sự kiện, khi nhấn vào button ".check" thì sẽ in ra giá trị của ô input ".guess"
 *          ! nếu người dùng ko nhập vào =>> '.message'.textContent = "⛔️ No number!"
 */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});
