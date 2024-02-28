'use strict'

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

{
    const isPrivate = 23;
    var notPrivate = 46;
};

// TODO 1)  
  // dùng 1 lần và k dùng lại thì IIFE sẽ giúp ta tiết kiệm được dữ liệu
  // IIFE giúp ta tránh bị dư thừa hàm 
  // IIFE dịch - "hàm được gọi ngay lập tức"

  // remake runOnce()
  (function (){
    console.log("This will never run again");
  })();
    /**
     * ! Có 2 dấu "()" trong code trên
     * * "()" đầu tiên, bao func - nội dung IIFE 
     *      ? Nếu bỏ đi thì JS sẽ hiểu bạn đang khai báo 1 func =>> yêu cầu tên
     *      TODO TIPS: chúng ta lừa JS bằng cách biến nó thành biểu thức và biểu thức này chứa func 
     * * "()" cuối cùng là gọi đến func kia
     *      ? Nó dùng để kích hoạt func đã được viết ra
     */

// TODO 2)
(() => {console.log("This will never run again")})();
(() => console.log("This will never run again"))(); // có 1 dòng =>> cách này oke hơn

// TODO 3) 
// console.log(isPrivate);// bug vì scope chỉ được áp dung cho block của nó
console.log(notPrivate);// ngược lại trên

// scope trong IIFE giúp ta không bị trùng biến với bên ngoài
  // ! nên khai báo private trong IIFE để tránh việc ghi đề không mong muốn

// TODO 4) 
   // không thể thay như vậy được vì 
      //? "()" =>> JS mong muốn 1 biểu thức
      //? "{}" =>> JS mong muốn 1 khối code, bao gồm cả biểu thức
