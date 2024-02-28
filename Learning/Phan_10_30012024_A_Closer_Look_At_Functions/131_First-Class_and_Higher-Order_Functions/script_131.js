'use strict';

/**
 * * First-Class Functions (Hàm Cấp Độ Nhất):
 * ? Có thể gán cho biến: Hàm có thể được gán cho một biến như bất kỳ giá trị nào khác.
 * ? Có thể được truyền như tham số cho hàm khác: Bạn có thể chuyển hàm như một đối số cho một hàm khác.
 * ? Có thể được trả về từ hàm khác: Một hàm có thể trả về một hàm khác.
 * TODO Ví dụ
 */

// Gán hàm vào biến
const greet = function() {
    console.log("Hello!");
};

// Chuyển hàm như một tham số
function saySomething(func) {
    func();
}
saySomething(greet); // In ra "Hello!"

// Trả về một hàm khác từ hàm
function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

/**
 * Higher-Order Functions (Hàm Cao Cấp):
 * ? Nhận một hoặc nhiều hàm khác như tham số: Hàm có thể nhận một hoặc nhiều hàm khác làm tham số.
 * ? Trả về một hàm khác: Hàm có thể trả về một hàm khác.
 */
// Hàm nhận một hàm khác làm tham số
function operation(func, x, y) {
    return func(x, y);
}

function add(a, b) {
    return a + b;
}

console.log(operation(add, 5, 3)); // Output: 8

// Hàm trả về một hàm khác
function multiplyBy(num) {
    return function(x) {
        return x * num;
    };
}

const double2 = multiplyBy(2);
console.log(double2(5)); // Output: 10
