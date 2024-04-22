"use strict";

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Hoisting là gì, nó có tác dụng gì tronng js?
 * TODO 2) TDZ là gì? nó có tác dụng gì, ví dụ ?
 */

// TODO 1)
// Hoisting là cơ chế mặc định của JS để si chuyển tất cả các biến và hàm khi khao báo lên đầu scope trước khi chúng được thục thi
// Nó giúp cho JS dẽ đọc, dễ hiểu, dễ bảo trì hơn
// ? ở ví dụ dưới đây, thay vì phải lướt lên trên xem biến đó khai báo như nào thì b đã có thể xem luôn ở dòng đó (biến "age")
function calculateAge(year) {
  console.log("Age:", age);
  var age = new Date().getFullYear() - year;
  console.log("Age:", age);
}
calculateAge(1990);

function calculateAge(year) {
  var age; // Biến được hoisted lên đầu phạm vi
  console.log("Age:", age); // Kết quả: undefined
  age = new Date().getFullYear() - year;
  console.log("Age:", age); // Kết quả: tuổi được tính toán
}
calculateAge(1990);

console.log(x); // Output: undefined
var x = 5; // cơ chế hoạt động giống biến age ở trên

// TODO 2)
// TDZ = Temporal Dead Zone = "vùng chết tạm thời"
// Khi một biến được khai báo bằng let hoặc const trong một phạm vi (scope), biến đó sẽ tồn tại trong TDZ từ điểm bắt đầu của phạm vi cho đến khi biến đó thực sự được gán một giá trị.
// Trong TDZ, việc truy cập biến sẽ gây ra một lỗi gọi là "ReferenceError".
// TDZ không áp dung với scope "var"
/* TDZ giúp phát hiện lỗi sớm hơn trong quá trình phát triển, 
giúp ngăn chặn việc sử dụng biến trước khi chúng được khởi tạo và 
giúp làm cho mã JavaScript trở nên an toàn và dễ bảo trì hơn.*/

// ? Ví dụ
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
// "x" đang nằm trong vùng TDZ vậy nên sẽ bị lỗi khi gọi ra

const myName = "Jonas";
if (myName == "Jonas") {
  console.log(`Jonas is ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = "teacher";
  console.log(x);
} // ở ví dụ này thì biến job sẽ nằm trong vùng TDZ
