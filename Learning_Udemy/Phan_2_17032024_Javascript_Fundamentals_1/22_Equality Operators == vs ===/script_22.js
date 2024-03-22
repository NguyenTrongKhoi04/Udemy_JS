"use strict";

const age = "18";
let favourite;

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output
 *         ? if (age === 18) console.log('You just became an adult :D (strict)');
 *         ? if (age == 18) console.log('You just became an adult :D (loose)');
 * TODO 2) Dùng prompt để nhập giá trị vào biến "favourite" rồi kiếm tra xem có thỏa mãn điều kiện "!== 23"
 *          ! nếu thỏa mãn =>> in ra "why not 23?"
 */

// TODO 1)
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// TODO 2)
favourite = prompt("nhập giá trị: ");
if (favourite !== 23) console.log("Why not 23?");
