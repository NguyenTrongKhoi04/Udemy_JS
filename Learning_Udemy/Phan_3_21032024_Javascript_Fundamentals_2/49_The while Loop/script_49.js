"use strict";

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let dice = Math.trunc(Math.random() * 6) + 1; // math.trunc =>> cắt bỏ phần thập phân

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) thay vòng lặp for bằng while
 * TODO 2) viết chương trình xúc xắc, nếu lắc vào số 6 thì dừng lại
 *          ! TIP: sử dụng biến "dice" trên kia
 */

// TODO 1)
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// TODO 2)
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
