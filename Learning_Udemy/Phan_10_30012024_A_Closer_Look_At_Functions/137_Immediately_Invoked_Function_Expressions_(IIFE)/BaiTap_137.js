'use strict';

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

{
    const isPrivate = 23;
    var notPrivate = 46;
};

/**
 * * Sử dụng nhữ dữ liệu trên
 * TODO 1) Tôi muốn sử dụng hàm trên duy nhất 1 lần và k thể chạy lại hàm trên 
 *          ? Giải thích "IIFE" là gì ? Tác dụng của nó 
 *          ? Viết lại func trên dưới dạng IIFE 
 * TODO 2) Từ phần 1) hãy chuyển hàm "IIFE" sang dạng Arrow func 
 * TODO 3) Dự đoán và giải thích output:
 *          ? console.log(isPrivate);
 *          ? console.log(notPrivate);
 *          ? Từ đó suy luận biến nào truy cập từ bên ngoài được
 *          ? Nêu ra tác dụng của scope trong IIFE
 * TODO 4) Nếu thay dấu "{}" của khối code dưới cùng bằng dấu "()" được không 
 */
