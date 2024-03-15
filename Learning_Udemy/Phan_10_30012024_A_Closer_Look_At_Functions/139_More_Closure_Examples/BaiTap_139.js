'use strict';

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const b = 777;
const h = function () {

  f = function () {
    console.log(b * 2);
  };
};

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

/**
 * * Sử dụng dữ liệu cho sẵn
 * TODO 1) Dự đoán output của từng "trường hợp sau"
 *          ? f()
 *          ? g(); f()
 *          ? h(); f()
 * TODO 2)  Giải thích output ở phần 1) 
 *          ? tại sao khi gọi f() thì bug
 *          ? Nếu gọi gọi "g(); f(); h(); f()" thì f sẽ return ra func của h() =>> đây có phải closure k ?
 * TODO 3) console.dir(f);
 *          ? kiểm tra "g(); f(); console.dir(f); h(); f(); console.dir(f);"
 *          ? output vì sao có dự khác nhau trong [[scope]]
 * TODO 4) Dự đoán output   
 *          ? boardPassengers(180,3); =>> giải thích luồng chạy
 *          ? nếu viết const "perGroup=1000;boardPassengers(180,3);" => giải thích output
 * TODO 5) closure != so với func bình thg
 */