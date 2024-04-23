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