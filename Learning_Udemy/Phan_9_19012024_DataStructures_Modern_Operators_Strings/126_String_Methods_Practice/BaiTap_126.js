const flights =`_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`
/**
 * ? Dữ liệu ở trên là 1 đoạn api cho sẵn (api sẽ dưới dạng JSON và có dấu '' bao trọn nội dung)
 * * api như sau cho dễ nhìn (api nếu enter thì lỗi, hãy thử enter xuống dòng ở chuỗi str biến "flights") 
  '_Delayed_Departure;fao93766109;txl2133758440;11:25
   +_Arrival;bru0943384722;fao93766109;11:45
   +_Delayed_Arrival;hel7439299980;fao93766109;12:05
   +_Departure;fao93766109;lis2323639855;12:30'
 * TODO: Từ đoạn code đó hãy convert sang format sau
    � Delayed Departure from FAO to TXL (11h25)
                 Arrival from BRU to FAO (11h45)
    � Delayed Arrival from HEL to FAO (12h05)
               Departure from FAO to LIS (12h30)
 */

   