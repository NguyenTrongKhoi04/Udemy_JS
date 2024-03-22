"use strict";

/**
 * TODO 1) 2 hàm trên gọi là gì
 * TODO 2) Nên khai báo theo cách nào
 */

// TODO 1)
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// TODO 2)
  // nên khai báo bằng cách gán hàm vào biến vì tôi thích như vậy 😂