/**
 * ======================= destructuring arrays ======================================
 */
'use trict';

const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    startMenu:['Focaccia','Brushchetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Paste','Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,// open 24 hours
            close:24
        },
    },

    order: function (startIndex,mainIndex){
        // ? this chính là obj (restaurant)
        //TODO: bạn cũng có thể viết restaurant.startMenu[startIndex]
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]]
    },

    orderDelivery_2: function (obj){
        console.log(obj);
    },

    // định nghĩa tham số của obj
    orderDelivery: function ({
        name = '', address = 'HN',startIndex=1,mainIndex=1
    }){
        // in truyền biến vào => dùng `` chứ ko phải dùng ''
        console.log(`Người dùng ${name} có địa chỉ ${address} 
        đặt món ${this.startMenu[startIndex]} và ${this.mainMenu[mainIndex]}`);
    }
};

/**
 * * khai báo thuộc tính, method đối tượng 
 * TODO-TIPS: arr => [], obj => {}
 * TODO-TIPS: tên của biến hủy được gán gia trị nên giống với tên thuộc tính, method obj
 */
//**************************** Default Values **************************************

let {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

let { //* ALIAS
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
    } = restaurant; 
console.log(restaurantName,hours,tags);


let {khoiDepZai = restaurant.name} = restaurant;
console.log(khoiDepZai)

let {menu = [],starters = []} = restaurant;
console.log(menu,starters)

/** 
 * ! lưu ý với trường hợp dưới đây. Vì Location là 1 hằng số trong Js
 * TODO: đặt tên cho phần tử 'location' của đối tượng restaurant để ko bị trùng
 */
// let {name,location: a,categories} = restaurant;
// console.log(name,a,categories);

//**************************** Mutating Values **************************************
let a = 111;
let b = 999;

let obj = {a: 9, b: 10, c: 11};// bỏ dấu chấm phaair ở đấu =>> ăn bug 
({a,b} = obj)
console.log(a,b);
/**
 * ! Lưu ý, khi ta "bắt đầu 1 dòng với dấu ngoặc nhọn" thì JS hiểu đó là 1 khối code
 * ! Chính là vì khôi nên ko thể gán giá trị được 
 * {a,b} = obj; =>> bug vì chương trình hiểu đây là khối chứ không phải biểu thức
 * TODO: ta nên bọc dòng đó bằng dấu "()"
 */

let {fri} = openingHours;
console.log(fri);
let {open: o_fri, close: c_fri} = fri;
console.log(o_fri, c_fri);

let {sat:{open: o,close}} = openingHours;
console.log(o,close);

/**
 * TODO: lúc sử dụng phải ghi những biến được khai báo ở func dựng sẵn 
 * * không nhất thiết phải đúng theo thứ tự giống phần khai báo
 */
restaurant.orderDelivery_2({
    time: '23:00',
    address:'123 Nguyen Trai',
    startIndex: 1,
    mainIndex: 1,
});
restaurant.orderDelivery({
    name: 'khoi',
});
restaurant.orderDelivery({
    startIndex: 2, 
    mainIndex: 2,
    name: 'khoi',
    address: 'HN',
});

