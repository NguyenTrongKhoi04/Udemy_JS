"use strict";

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Trong các câu lệnh dưới đây, câu lệnh nào là biểu thức
 *          ? 3 + 4;
 *          ? 1991;
 *          ? true && false && !false;
 *          ? if (23 > 10) {const str = "23 is bigger";}
 * TODO 2) cho 2 đoạn code sau "const me = "Jonas";console.log(`I'm ${2037 - 1991} years old ${me}`);?
 *          ?  Chúng ta có thể thay khối lệnh if vào tron "${}" ?
 */

// TODO 1)
// Biểu thức sẽ trả lại 1 giá trị (number, boolean,...)
3 + 4;
1991;
console.log(true && false && !false);

// đây không phải 1 biểu thức, nó là 1 khối lệnh
if (23 > 10) {
  const str = "23 is bigger";
}

// TODO 2)
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
// chúng ta không thể thay vào vì "${}" sẽ chứa 1 giá trị
