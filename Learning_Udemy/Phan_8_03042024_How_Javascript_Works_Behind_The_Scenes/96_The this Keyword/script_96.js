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
// TODO 1), 2)
/*
  vì khác phạm vi khai báo biến
  "const, let" sẽ được mặc định cho vào cùng TDZ nếu chưa được gán giá trị
  "var, function" sẽ được hoisting kéo lên trên đầu trước khi thực thi js
*/

// TODO 3)
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // đây là lý do k nên dùng var để khai báo

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// TODO 4)
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
