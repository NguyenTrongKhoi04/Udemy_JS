// * Cách 1: VIP PRO, lưu ý phải là kiểu dữ liệu (str,int,...)
let check_String = str => console.log(str);
let check_Number = int => console.log(int);

check_String('khoi')
check_Number(568943)

//* 3 cách khai báo func
//? Hàm biểu thức - func expression
const func1 = function (){}

//? Hàm mũi tên - Arrow func 
const func2 = ()=>{}

//? Function declaration - Khai báo hàm trước khi sử dụng nó
function func3(){}

//? First class - gán hàm vào giá trị 1 biến
const test = func4();
const test2 = ()=>{};

//? Higher order func - cho phép truyền vào tham số của hàm khác
const getAllTeam = function (teamMembers,  teamName) {
    return `${teamName}: ${teamMembers.join(', ')}`;
}
console.log(getAllTeam(['John', 'Jane'], "Developers"));

// ! Lưu ý 
console.log(func1 == func2 == func3) // false vì chúng có kiểu khác nhau

//! sự khác biệt giữa các kiểu hàm là từ khóa 'this' =>> tự tìm hiểu thêm