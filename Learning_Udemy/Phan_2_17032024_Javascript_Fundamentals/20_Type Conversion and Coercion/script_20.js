"use strict";

const inputYear = "1991";

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output
 *        ? console.log(Number(inputYear), inputYear);
 *        ? console.log(Number(inputYear) + 18);
 *        ? console.log(Number('Jonas'));
 *        ? console.log(typeof NaN);
 *        ? console.log(String(23), 23);
 * TODO 2) Dự đoán output và rút ra kết luận của "ép kiểu - type coerction"
 *        ? console.log('I am ' + 23 + ' years old');
 *        ? console.log('23' - '10' - 3);
 *        ? console.log('23' / '2');
 */

// TODO 1)
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// TODO 4)
// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
// ! trong JS sẽ tự định nghĩa kiểu dữ liệu
// ? "+" =>> định nghĩa thành chuỗi
// ? "/, *, -" => định nghĩa 1 phép toán

// TODO 5)
let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
