'use strict';

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const b = 777;
const h = function () {

  f = function () {
    console.log(b * 2);
  };
};

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// TODO 1) 
    // f() //bug 
    // g(); f() //output:  46
    // h(); f() //output:  1549

// TODO 2) 
    // ? gọi mỗi "F()" =>> bug vì biến f chưa được gán gì cả
    // ? "g();f();" =>> f đc gán func
    // ? "h();f();" =>> f đc gán func 

    g(); f(); h(); f();
        // 'f' là 1 closure vì nó truy cập phạm vi biến bên ngoài 
        // khi bên ngoài thực thi xong nhưng bến func đc gán vào 'f' vẫn có thể truy cập váo biến bên ngoài 
        // func trong setTimeout nhảy ra khỏi func boardPassengers() khi func cha thực hiện xong
                // điều này giúp func trong setTimeout truy cập được biến bất kỳ 
// TODO 3) 
g(); f(); console.dir(f);
h(); f(); console.dir(f);
    // ở đây có sự khác biệt vì chúng ghi đè lên nhau

// TODO 4)
boardPassengers(180,3);
const perGroup=1000;boardPassengers(180,3);
    /**
     * ? luồng chạy
     *     1) toán tử gán trong biến perGroup đc thực thi
     *     2) thực hiện setTimeout và sau func boardPassengers kết thúc, nó trả về func trong setTimeout  
     *  
     * ? Nếu viết....
     *      closure sẽ lấy biến perGroup trong phạm vi scope của nó
     *      2 biến perGroup lúc này là 2 địa chỉ vùng nhớ khác hoàn toàn nhau
    */

// TODO 5) 
const number = 100;
/**
 * * func bình thg
 */
function normalFunction() {
    let normalVariable = 'I am inside!';

    function innerFunction() {
        console.log(normalVariable);
        console.log(number);
    }

    innerFunction(); // Gọi innerFunction từ trong normalFunction
}

normalFunction(); // Kết quả: I am inside!

// innerFunction(); // Error: innerFunction is not defined
    // innerFunction không được trả về ra khỏi normalFunction, nên nó không thể truy cập từ bên ngoài normalFunction.
    //Nếu chúng ta cố gắng gọi innerFunction từ bên ngoài normalFunction, nó sẽ gây ra lỗi vì innerFunction không tồn tại trong phạm vi toàn cục

/**
 * * Closure 
 */
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
        console.log(number);
    }

    return innerFunction;
}

let closureFunc = outerFunction();
closureFunc(); 
    // sự khác biệt lớn nhất ở đây là closure thì gọi đc func innerFunction để thao tác,.. với func này
    // trong khi func bình thường thì k thể gọi như thế được 
    // ! Vấn đề =>> nếu innerFunction() có chứa đối số thì giá trị của những đối số này sẽ khó thay đổi link hoạt 
        // ! vì ta k thể gọi trực tiếp để thao tác với func innerFunction đc mà phải thông qua normalFunction 