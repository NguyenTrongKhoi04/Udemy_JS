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