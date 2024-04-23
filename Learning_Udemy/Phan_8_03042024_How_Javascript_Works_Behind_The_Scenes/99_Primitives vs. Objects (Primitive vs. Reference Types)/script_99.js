"use strict";

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) theo bạn thì khi khai báo bằng const thì có thể thay đổi giá trị được không?
 * TODO 2) tại sao ví dụ ở dưới lại bị thay đổi giá trị mặc dù khai báo bằng const? Lý giải?
 */

// TODO 1)
// nếu biến đó đc gán bằng giá trị nguyên thủy thì ko thể thay đổi nhưng nếu là obj thì ngc lại
// cái này do vùng nhớ của JS quy định. Các giá trị nguyên thủy thì dùng callstack còn obj sẽ dùng giá trị tham chiếu của callstack đến heap

// TODO 2) 
// nhìn ảnh b sẽ hiểu