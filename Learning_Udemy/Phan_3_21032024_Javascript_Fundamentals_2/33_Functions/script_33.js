"use strict";

function logger() {
  console.log("My name is Jonas");
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const num = Number("23");

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) func "logger" và func "fruitProcessor" thuộc loại hàm là gì? kể tên các loại hàm 
 * TODO 2) Dự đoán output "logger();logger();logger();"
 * TODO 3) Dự đoán output
 *          ? const appleJuice = fruitProcessor(5, 0);console.log(appleJuice);
 *          ? const appleOrangeJuice = fruitProcessor(2, 4);console.log(appleOrangeJuice);
 * TODO 4) Tại sao ở dòng số 12 lại có func "Number"
 */

// TODO 1)
    /**
     * "logger" là func ko trả lại (void function) và nó thực hiện 1 công việc (procedure)
     * "fruitProcessor" là func trả lại (function with return value)
     * 
     * * các loại hàm: arrow, callback, anonymous, event handle(hàm xử lý sự kiện), Higher-order(hàm tạo ra hàm),... 
     */

// TODO 2)
logger();
logger();
logger();

// TODO 3) 
const appleJuice = fruitProcessor(5, 0);console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);console.log(appleOrangeJuice);

// TODO 4) 
    // Vì function "Number" là 1 hàm dựng sẵn của JS