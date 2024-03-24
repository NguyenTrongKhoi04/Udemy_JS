"use strict";

let jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Giải thích từ khóa "this" trong "thuộc tính calcAge" của obj Jonas
 * TODO 2) Dự đoán output
 *          ? console.log(jonas.calcAge());
 *          ? console.log(jonas.age);console.log(jonas.age);console.log(jonas.age);
 * TODO 3) viết func cho thuộc tính getSummary của "Jonas" để kiểm tra xem đủ tuổi lái xe chưa
 */

// TODO 1)
// "this" dùng để thao tác với những gì trong đối tượng đó, ở đây là thao tác với "thuộc tính" của obj "jonas"

// TODO 2)
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// TODO 3)
jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
