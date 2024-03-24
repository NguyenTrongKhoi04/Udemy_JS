"use strict";

const friends = ["Michael", "Steven", "Peter"];

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Add elements
 * TODO 2) Remove elements
 */

// TODO 1) Add elements
// thêm phần tử vào cuối arr
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// thêm phần tử vào đầu arr
friends.unshift("John");
console.log(friends);

// TODO 2) Remove elements
// Xóa phần tử cuối
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

// xóa phần tử đầu
friends.shift(); // First
console.log(friends);

// TODO 3) find element's index
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// TODO 4) find element of arr
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
