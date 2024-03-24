"use strict";

const friends = ["Michael", "Steven", "Peter"];

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Add elements
 *          ? Thêm phần tử vào cuối arr
 *          ? Thêm phần tử vào đầu arr
 * TODO 2) Remove elements
 *          ? xóa phần tử vào cuối arr
 *          ? xóa phần tử vào đầu arr
 * TODO 3) find element's index
 *          ? In ra vị trí của 1 phần tử bất kỳ trong arr 
 *          ? In ra vị trí của 1 phần tử bất kỳ không có trong arr 
 * TODO 4) find element of arr
 *          ? kiểm tra xem phần tử đó có trong arr hay không
 *          ? viết 1 func chứa if/else áp dụng điều này
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

// TODO 5) 
console.log(friends + 10);
console.log(typeof (friends + 10));
