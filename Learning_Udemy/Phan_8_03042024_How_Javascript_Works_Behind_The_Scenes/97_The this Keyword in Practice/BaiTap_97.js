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