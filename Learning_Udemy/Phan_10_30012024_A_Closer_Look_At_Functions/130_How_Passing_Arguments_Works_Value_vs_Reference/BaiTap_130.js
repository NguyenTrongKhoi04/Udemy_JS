'use strict';

let a = 5;
let b = a; 
b = 1; 
console.log(a);// ouput: 5

let obj ={
    name: 'khoi',
    age: 18,
}

let CloneObj = obj;
CloneObj.name= "Nguyen Khoi";
console.log(obj);//  output : {name: "Nguyen Khoi", age: 18}

function testClone(obj){
    obj.name = 'Khoi Dep Zai';
    if(obj.age == 18) console.log('Đủ tuổi lấy vợ');
}
testClone(obj);
console.log(obj);
/**
 * * Sử dụng data cho sẵn
 * TODO 1) Giải thích vì sao cùng là 1 cách gán mà "obj.name" lại thay đổi trong khi biến "a" k thay đổi giá trị
 * TODO 2) Truyền obj qua hàm testClone thì hiện tượng gì xảy ra
 * TODO 3) Có cách nào khắc phục điều này không
 */