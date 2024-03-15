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
    iataCode: 'LX',
    bookings: [],
  };
  
const book = lufthansa.book;
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

/**
 * * Sử dụng những dữ liệu ở trên 
 * TODO 1) Khai báo biến bookEW, bookLX, bookLH (tương ứng với việc trỏ vào "eurowings", "swiss" hoặc "lufthansa")
 *          ? Làm cách nào để "this" trong method "book" trỏ đến obj "eurowings", "swiss" hoặc "lufthansa"
 *          ? output: bookEW(23, 'Steven Williams');
 * TODO 2) Giải thích dòng code sau "const bookEW23 = book.bind(eurowings,23);"
 *          ? this lúc này trỏ đến đâu 
 *          ? 23 ccos ý nghĩa gì
 *          ? Dự đoán output: "bookEW23('Jonas Schmedtmann');bookEW23('Martha Cooper');"
 * TODO 3) "document.querySelector(.buy).addEventListener('click',lufthansa.buyPlane);"
 *          ? Dự đoán output: "lufthansa.buyPlane();"
 *          ? Dự đoán output sau khi nhấn nút ".buy" trên màn hình
 *          ? Giải thích vì sao output như vậy
 *          ? Dự đoán output khi thay "lufthansa.buyPlane" -> "lufthansa.buyPlane.bind(lufthansa)"
 * TODO 4) Tạo biến "addTax" chứa arrow func có 2 đối số (rate,value) và func thực hiện "value + value * rate" 
 *          ? Dự đoán output: "console.log(addTax(0.1,200));"
 * TODO 5) Khai báo thêm "const addVAT = addTax.bind(null,0.23);"
 *          ? Tại sao ta phải bind "addTax" với null. Null có tác dụng gì
 *          ? Giải thích dòng code trên
 *          ? kiểu viết trên có tương đương với cách vt sau ko "addVAT = value => value + value * 0.23" 
 *          ? Dự đoán output: console.log(addVAT(100));
 * TODO 6) Viết thêm 2 hàm "addTaxRate" & "addVAT2" thực hiện chức năng giống trên nhưng được viết dưới dạng func return func
 *      
 */