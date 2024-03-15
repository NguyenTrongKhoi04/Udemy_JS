'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
const booker2 = secureBooking(); 

booker();
booker();
booker();
booker2();
booker2();
booker2();
booker2();

/**
 * * Sử dụng dữ liệu trên
 * TODO 1) Closure là gì? Cách hoạt động và tác dụng của closure?
 * TODO 2) Giải thích (với tài nguyên - full chỗ code trên)
 *          ? Cách tạo ra closure trong mớ code trên
 *          ? Vì sau cứ mỗi lần gọi "booker()" thì passengerCount++ (vì sao booker() nhớ đc giá trị cũ của nó)
 *          ? "booker" & "booker2" có liên quan, ảnh hưởng tới nhau không 
 * TODO 3) Cách kiểm tra 1 closure (thuộc tính, phạm vi scope)
 */