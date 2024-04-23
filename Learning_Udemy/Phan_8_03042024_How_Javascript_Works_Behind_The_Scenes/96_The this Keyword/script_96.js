"use strict";

var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) output console.log(); sẽ là gì? vì sao
 * TODO 2) có thể thay "this.lastName" = "person.lastName" đc k? vì sao? Từ đó rút ra kết luận về "this"
 */

// TODO 1)
//output : John Doe vì this trong method fullName() chính là object person

// TODO 2)
// có thể thay this.lastName bằng person.lastName vì "this" là từ khóa ngữ cảnh,
// trong trường hợp này, nó đại diện cho object person.

/**
 * ! kết luận
 * * this là 1 biến động và nó mang giá trị theo ngữ cảnh cụ thể (trong event, object,...)
 * * từ khóa "this" không trỏ vào chính hàm mà nó đang ở hoặc không trỏ vào môi trường biến của hàm đó.
 * */
