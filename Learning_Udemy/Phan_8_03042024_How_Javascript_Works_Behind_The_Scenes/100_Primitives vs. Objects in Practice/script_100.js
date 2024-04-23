"use strict";

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage: ", marriedJessica);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output dòng 10, 11
 * TODO 2) Tạo 1 biến "jessicaCopy" và có giá trị giống obj "jessica2" nhưng lastName = "Davis"
 * TODO 3) Nếu đối tượng trong đối tượng thì sao? liệu nó có thay đổi theo nhau k> giải thích
 */

// TODO 2)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);

// TODO 3)
// sẽ thay dổi giống nhau vì lúc này trong callstack vẫn là jessica2 và tham chiếu đến obj "family"
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);
// ! lưu ý: arr là kiểu đặc biệt của dối tượng
const arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true
