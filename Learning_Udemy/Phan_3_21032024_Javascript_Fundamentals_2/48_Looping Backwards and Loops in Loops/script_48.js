"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

const years = [1991, 2007, 1969, 2020];
const ages = [];
/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) In ra giá trị của thuộc tính và typeof giá trị đó "jonas"
 *          ? Thêm các giá trị arr "jonas" vào arr "types" thông qua vòng lặp
 * TODO 2) lấy 2037 trừ đi từng phần tử "years" rồi gán các kết quả đó cho mảng "ages".
 * TODO 3) Duyệt toàn bộ arr "jonas"
 *          ? Chỉ in ra các giá trị có kiểu "number"
 *          ? Chỉ in ra các giá trị có kiểu "string"
 */

// TODO 1)
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

// TODO 2)
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// TODO 3)
// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
