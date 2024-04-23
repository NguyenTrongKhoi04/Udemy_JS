"use strict";

var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) output console.log(); sẽ là gì? vì sao
 * TODO 2) có thể thay "this.lastName" = "person.lastName" đc k? vì sao? Từ đó rút ra kết luận về "this"
 */