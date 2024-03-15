/**
 * ======================= destructuring arrays ======================================
 * * Bản chất là trính xuất dữ liệu thành những phần nhở và gán chúng vào những biến riêng lẻ
 * * làm việc với arr và obj
 * * có thể Override data (cho dù data đó tĩnh)
 * TODO: Khai báo và có thể gán giá trị biến cùng 1 lúc
 */
'use trict';

const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    startMenu:['Focaccia','Brushchetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Paste','Risotto'],

    order: function (startIndex,mainIndex){
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]]
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// console.log(a,b,c);

const [x,y,z] = arr;
console.log(x, y, z);
console.log(arr);// arr gốc k bị ảnh hưởng

let [first,,second] = restaurant.categories;
console.log(first,second);

/**
 * ? Giờ tôi muốn đổi giá trị 2 biến 'first' và 'second' cho nhau
 * ! sử dụng biến tạm ? để tôi chỉ bạn cách sau để bạn bớt gà Js lại
 * TODO: Switching varidables
 */
[first,second] = [second,first];
console.log(first,second);

/**
 * * gọi 1 hàm trong arr
 * * Receive 2 return values from a func
 */
let [starter,mainCourse] = restaurant.order(2,0);
console.log(restaurant.order(2,0));

/**
 * * destructuring arrays practice
 */
let nest = [2,4,[5,6]]
let [i,,[j,k]] = nest;
// let [i,,j] = nest;
console.log(i,j,k);

/**
 * ? Giả sử bạn muốn gián giá trị mảng và biến nhưng không biết hết độ dài của mảng
 * TODO: Default Values
 * * Cách này thường sẽ áp dụng vào lấy API 
 */
let checkArr = [1,2];
// let [q,w,e] = checkArr;
// console.log(q,w,e);// biến e bị underfined
let [q = 1,w = 1,e = 1] = checkArr;
console.log(q,w,e);


