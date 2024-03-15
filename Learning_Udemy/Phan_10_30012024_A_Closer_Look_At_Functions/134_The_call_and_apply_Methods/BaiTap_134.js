'use strict';

const flightData = [583,'Geoge Cooper'];
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SWISS',
    booking: [],
};

/**
 * * Sử dụng những dữ liệu đã cho ở trên
 * TODO 1) "lufthansa.book(239, 'Jonas Schmedtmann'); lufthansa.book(635, 'John Smith');"
 *          ? Dự đoán output: console.log(lufthansa.bookings);
 *          ? Giải thích vì sao có output như vậy
 *          ? "this" trỏ đến đâu
 * TODO 2) "const book = lufthansa.book;" 
 *          ? Dự đoán output: console.log(book);
 *          ? Giải thích vì sao có output như vậy
 *          ? Cách khắc phục điều này
 * TODO 3) Nếu dữ liệu của đối số truyền vào là dạng mảng giống biến "flightData" thì làm thế nào
 * TODO 4) 3 thuộc tính của 3 obj là "airline","iataCode","swiss" 
 *          ? Nếu thay đổi 1 trong 3 thuộc tính của đối tượng có được k? vì sao
 */