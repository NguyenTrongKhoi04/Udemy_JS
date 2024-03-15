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
};

// *============== Lý thuyết ==============
/**
 * ? Nay chúng ta sẽ học về đối số mặc định trong hàm
 * ! Như trc kia ở ES5 thì lm như sau nếu muốn có giá trị mặc định của đối số
 */
const createBooking_1 = function (flightNum, numPassenger, price){
    flightNum = numPassenger || 'VN01';
    numPassenger = numPassenger || 1;
    price = price || '3000';

    const booking = {
        flightNum,
        numPassenger,
        price
    };

console.log(booking);
bookings.push(booking);
};
createBooking_1(); //output: {flightNum: 'VN01', numPassenger: '1', price: '3000'}
/**
 * TODO Smart by ES6 
 */
const createBooking_2 = function (flightNum = 'VN01', numPassenger = 0+1, price='3000'){
    const booking = {
        flightNum,
        numPassenger,
        price
    };
console.log(booking);
bookings.push(booking);
};
// *============== Bài Tập ==============
// TODO 1)
