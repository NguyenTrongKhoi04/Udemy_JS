"use strict";
var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output dòng số 24. Giải thích output đó
 * TODO 2) Dự đoán output dòng số 23. Giải thích output đó
 * TODO 3) cho đoạn code sau
 *        const addExpr = function (a, b) {return a + b;};addExpr(2, 5);addExpr(2, 5, 8, 12);
 *        ? Tối muốn lấy những tham số được truyền vào thì làm thế nào
 *        ? nếu đổi hàm trên thành arrow func thì có thể lấy được tham số truyền vào không
 */

// TODO 1)
// vì this là biến ngữ cảnh và nó lấy ngữ cảnh gần nhất với nó =>> ngữ cảnh calcAge ko có "year"
// ! 1 hàm bình thường sẽ tạo ra 1 ngữ cảnh mới, cụ thể ở đây là hàm "isMillenial"
// * slolution 1: đặt biến ngữ cảnh
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// * slolution 2: Use arrow func (vì this arrow func sẽ lấy ngữ cảnh
// *    của cha, ở đây thi ngữ cảnh con "isMillenial" và ngữ cảnh cha "calcAge")
// const isMillenial = () => {
// console.log(this);
// console.log(this.year >= 1981 && this.year <= 1996);
// };
// isMillenial();

// TODO 2)
// vì "this" ở trong arrow func =>> nó sẽ lấy ngữ cảnh của arrow func

// TODO 3)
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addExprArrow = function (a, b) {
  console.log(arguments);
  return a + b;
}; // arrow func ko có arguments
addExprArrow(2, 5);
