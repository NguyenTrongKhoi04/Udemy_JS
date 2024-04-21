"use strict";

const firstName = "Jonas";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    // console.log(str);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

calcAge(1991);
console.log(age);
printAge();

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Nêu sự khác biệt var, let, const. Nếu không khai báo thì thuộc phạm vi nào
 * TODO 2) Bỏ comment dòng số 27
 * TODO 3) Bỏ comment dòng số 28
 * TODO 4) Tại sao biến firstName dòng số 15 không bị báo lỗi (hằng số thì làm gì được khai báo 2 lần)
 * TODO 5) Biến "str" dùng biến firstName nào ?
 */