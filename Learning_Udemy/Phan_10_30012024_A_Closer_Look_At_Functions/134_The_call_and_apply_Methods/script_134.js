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
    bookings: [],
};

// TODO 1)
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  console.log(lufthansa.bookings); 
        //? Vì this trỏ đến obj bao gồm nó =>> thay đổi phần tử gốc

// TODO 2)
  const book = lufthansa.book;
  console.log(typeof book);
//   book(23, 'Sarah Williams'); //bug 
        /**
         * ! Từ khóa this không biết nó trỏ đến đâu
         * ? ta tạo bản sao khiến this ko thể biết đâu là func mà nó trỏ đến 
         * ? lufthansa.book là 1 method của obj nhưng khi gán thì "book" đang chỉ đến 1 method độc lập ko gắn với obj nào
         */
  // Cách 1:
  const book_1 = lufthansa.book.bind(lufthansa);
  book_1(23, 'Sarah Williams');

  // Cách 2:
  book.call(eurowings, 23, 'Sarah Williams');// this trỏ đến "eurowings"
  console.log(eurowings.bookings);

// TODO 3) 
book.apply(swiss, flightData);
console.log(swiss);

// TODO 4)
    // * không thể thay đổi tên của 3 thuộc tính trên
    //? vì ở method book() nó đã ghi rõ "this.airline, this.iataCode, this.bookings"
    //? Nếu ta thay đổi tên của 1 trong 3 thuộc tính trên =>> bị undefined vì this trỏ đến thuộc tính k xác đinh