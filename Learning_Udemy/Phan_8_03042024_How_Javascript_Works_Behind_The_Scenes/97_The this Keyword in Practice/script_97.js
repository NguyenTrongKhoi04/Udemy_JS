"use strict";

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) dự đoàn output của dòng số 3, 9, và 15. Giải thích
 * TODO 2) "this" dòng số 21 có ý nghĩa gì
 * TODO 3) dòng số 33, "jonas.calcAge" có gì khác so với "jonas.calcAge()"
 */

// TODO 1) output chạy lên là thấy, chỉ giải thích thui
//? dòng số 3: "this" trong ngữ cảnh (global) =>> in ra thông tin của global-window
//? dòng số 9:  "this" trong hàm => mở lại ảnh 3 bài 96
//? dòng số 15: "this" trong 1 arrow func =>> arrow function là hàm ngữ cảnh (ngữ cảnh là global-window)

// TODO 2)
// Nó đại diện cho object jonas

// TODO 3)
// có sự khác nhau, "jonas.calcAge" là gán hàm còn "jonas.calcAge()" là gán giá trị hàm vào biến
