"use strict";

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
const y = new Array(1991, 1984, 2008, 2020);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output
 *          ? console.log(friends);
 *          ? console.log(friends[0]);
 *          ? console.log(friends[2]);
 *          ? console.log(friends.length);
 *          ? console.log(friends[friends.length - 1]);
 *          ? friends[2] = "Jay"; console.log(friends);
 * TODO 2) Có thể cho "friends = ['Bob', 'Alice']" được không
 * TODO 3) tạo 1 func "calcAge" tính độ tuổi (lấy 2023 trừ đi đối số được cho vào hàm)
 * TODO 4) Dự đoán output "console.log(ages);"
 */

// TODO 1)
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // * TIPS lấy phần tử cuối cùng

friends[2] = "Jay";
console.log(friends);

// TODO 2)
// friends = ['Bob', 'Alice'] // Không được  vì friends là biến const

// TODO 3)
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// TODO 4)
console.log(ages);
