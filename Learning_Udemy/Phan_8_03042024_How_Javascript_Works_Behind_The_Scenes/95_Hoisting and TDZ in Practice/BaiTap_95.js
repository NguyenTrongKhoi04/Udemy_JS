"use strict";
console.log(me);
console.log(job);
console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow);
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

var x = 1;
let y = 2;
const z = 3;

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Vì sao kết quả lại khác nhau của 3 console.log(); ở dòng 3,4,5
 * TODO 2) Tại sao có sự khác biệt trong phần gọi hàm từ dòng 12 -> 15 
 * TODO 3) Tại sao không nên dùng var để khai báo biến
 * TODO 4) x,y,z có là thuộc tính của window không
 */
