"use strict";

const age = 23;
let drink2;

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) viết lại khối lệnh sau bằng toán tử 3 ngôi
        if (age >= 18) {
            drink2 = "wine 🍷";
        } else {
            drink2 = "water 💧";
        }
        console.log(drink2);
 */

// TODO 1)
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
