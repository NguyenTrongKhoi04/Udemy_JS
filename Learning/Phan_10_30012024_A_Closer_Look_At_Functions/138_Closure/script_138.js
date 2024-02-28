'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// TODO 1)
    /**
     * * khi một hàm trong JavaScript truy cập các biến nằm ngoài phạm vi của nó, chúng ta gọi đó là một closure. Một closure trong JavaScript là một hàm có thể truy cập và thay đổi biến ở phạm vi 
     *      *bên ngoài của nó, ngay cả sau khi phạm vi bên ngoài đã hoàn thành thực thi.
     * 
     * * bản chất closure là func a return func b và func b sử dụng những biến của func a (tạm hiểu vậy, ở dưới sẽ rõ hơn)
     * * Cách hoạt động ở phần 2) 
     * * Closre giúp hàm nhớ tất cả những biến tồn tại của hàm ở lần gọi cuối của hàm ở ngữ cảnh đó 
     * 
     * ! Vì đây là 1 khái niệm trừu tượng =>> giải thích bằng ứng dụng sẽ hiểu hơn
     */

// TODO 2)
const booker = secureBooking();// tạo ra 1 execution context mới, phạm vi "booker" sẽ ôm trọn biến passengerCount
const booker2 = secureBooking();// tạo ra 1 execution context mới, != booker 

booker();
booker();
booker();
booker2();
booker2();
booker2();
booker2();

/**
 * =========================================================================
 *           * Vì để cho dễ hiểu nên sẽ giải thích phần ?-2 trước *
 * =========================================================================
 * * ?-1 *
 * ? như ở booker & booker2 thì đây là 2 ngữ cảnh khác nhau
 * ? sau khi thực hiện thì nó sẽ tham chiếu tới biến gốc của func a
 *    TODO 1) trong trường hợp booker =>> sau khi thực hiện xong thì biến passengerCount sẽ thay đổi
 *    TODO 2) passengerCount sẽ lưu trữ về giá trị được thay đổi khi gọi và lưu nó trong scope của biến ngữ cảnh 
 *    TODO 3) Sau khi thực hiện xong ngữ cảnh cụ thể thì biến passengerCount được lưu trữ vào "scope chain của ngữ cảnh đó" - chính là phạm vi 2) đã nhăc tới
 *    TODO 4) Và đồng thời biến passengerCount được reset lại về giá trị ban đầu để phục vụ cho lần gọi func a trong bối cảnh mới 
 * ! Mỗi ngữ cảnh thực thi có 1 môi trường biến chứa tất cả các biến cục bộ của nó
 * 
 * * ?-2 *
 * * Nói 1 cách khác là khi thực hiện xong thì func secureBooking ko còn nữa nhưng booker vẫn có quyền 
 * *      truy cập vào all những gì của func secureBooking (cụ thể ở đây là biến passengerCount)
 * *      ở thời điểm nó được tạo ra =>>> đó chính là closure
 * 
 * * Closre giúp hàm nhớ tất cả những biến tồn tại của hàm ở lần gọi cuối của hàm ở ngữ cảnh đó 
 * 
 * * ?-3 *
 * ? "booker" & "booker2" k ảnh hưởng tới nhau vì ngữ cảnh chúng khác nhau
 */

// TODO 3) 
console.dir(booker);
console.dir(booker2);
   /**
    * ! "[[..abc..]]" =>> tức là thuộc tính nội bộ ko thể truy cập được từ code 
    * F12 -> anonymous -> [[Scopes]] -> Closure. Xem thuốc tính thì [[Scopes]] thay bằng [[prototype]]
    */
