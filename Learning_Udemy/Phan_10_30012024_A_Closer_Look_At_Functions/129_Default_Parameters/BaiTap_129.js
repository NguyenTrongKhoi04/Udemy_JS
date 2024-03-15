'use strict';

let testNumber=4;
const bookings = [];

const createBooking = function (flightNum, numPassenger, price){
    const booking = {
        flightNum,
        numPassenger,
        price
    };
    console.log(flightNum);
console.log(booking);
bookings.push(booking);
}

/**
 * * Sử dụng data sẵn có (cả data lý thuyết file bên kia)
 * TODO 1) short circuiting là gì? default parameters là gì ? 
 * TODO 2) createBooking(`${testNumber}+1`,1,1); =>> tôi muốn output của biến "flightNum" = 5
 * TODO 3) sửa đối số của hàm createBooking_2(flightNum = 'VN01',numPassenger = 4*3,price= `${numPassenger*300}`){.....}
 *          ? Dự đoán output của dòng lệnh trên
 *          ? Nếu đổi chỗ 2 đối số cuối? createBooking_2(flightNum = 'VN01',price= `${numPassenger*300}`,numPassenger = 4){.....}
 * TODO 4) VIết như sau có đc k? createBooking_2(flightNum = 'VN01',numPassenger = 4,price= numPassenger*300){.....}
 * TODO 5) với func createBooking_1(). Tôi chỉ muốn truyền tham số vào "flightNum" & "price" thì làm thế nào? 
 * 
 */ 
