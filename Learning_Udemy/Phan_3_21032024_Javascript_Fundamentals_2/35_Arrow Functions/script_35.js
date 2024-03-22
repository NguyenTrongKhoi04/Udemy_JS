"use strict";

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Chuyển hàm "calcAge3" thành arrow func
 * TODO 2) viết func tính sô thời gian sắp phải nghỉ hưu (65 tuổi là nghỉ hưu)
 */

// TODO 1)
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

// TODO 2) 
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
