/**
 * ======================= dThe Spread Operator (...)======================================
 * * Tách bất cứ thú gì thành các phân tử con
 * * dữ liệu sau khi được tách từ 1 biến/obj thì phải được lưu dưới dạng obj hoặc arr ("[]" or "{}"")
 * * Tách được ar, str, maps, sets. NOT Obj (đối với lệnh in chứ gán thì ok)
 * ? destructur & spread có gì khác nhau
 *      * 2 cái này đều có tác dụng là tách
 *      * destructur là trích xuất dữ liệu rồi gán vào biến
 *      * spread là tạo bảo sao cho , ko tham chiếu tới giá trị gốc (ở dưới có đề cập)
 *      * destructur thì data sẽ được lưu vào biến cụ thể
 *      * spread thì data đc lưu dưới dạng động (lúc arr, lúc abj, ...) =>> ko console.log được
 * ! Ở Js thì arr và obj sẽ được tham chiếu. 
 * ! Ví dụ: a = [1,2]; b=a ; b[0] = 'test'; console.log(a) =>> output: ['test',2]
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

    orderDelivery: function (obj){
        console.log(obj);
    },

    // định nghĩa tham số của obj
    orderDelivery_2: function ({
        name = '', address = 'HN',startIndex=1,mainIndex=1
    }){
        // in truyền biến vào => dùng `` chứ ko phải dùng ''
        console.log(`Người dùng ${name} có địa chỉ ${address} 
        đặt món ${this.startMenu[startIndex]} và ${this.mainMenu[mainIndex]}`);
    },

    orderPaste: function (ing1, ing2, ing3){
        // ! muốn gán biến vào chuỗi =>> ``, NOT ""
        // console.log("Món paste của bạn hấp dẫn khi ăn với ${ing1}, ${ing2} và ${ing3}");
        console.log(`Món paste của bạn hấp dẫn khi ăn với ${ing1}, ${ing2} và ${ing3}`);
        
    }
};

// Copy arr
mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arr
let menu = [...restaurant.startMenu,...restaurant.mainMenu];
console.log(menu);

// Tách chuỗi thành phần tử con (các chữ cái)
let str = "jonas";
let letter = [...str];
let [a,b,d] = letter ;// Destructur  
console.log(a,b,d);
console.log(letter[0]);// trích xuất 1 phần tử ra ngoài
console.log(letter);
console.log(str);

// TODO: Nhập giá trị và in ra 
// let ingredients = [
//     prompt("let's make 1"),
//     prompt('let\'s make 2'),
//     prompt("let's make 3")
// ];
// console.log(ingredients);
// console.log(...ingredients);
// ({orderPaste: order} = restaurant);// ? Ôn lại tý destructur, thay vì cho nó thành biểu thức thì có thể khai báo với let
// order(...ingredients);
// restaurant.orderPaste(...ingredients);

// Objects
let newRestaurant0 = {
    name : 'Jonas Restaurant',// name != restaurant.name
    ...restaurant,
    founder: "KhoiNguyen"
};
console.log(newRestaurant0);
// console.log(...newRestaurant0);// error vì newRestaurant là obj

let newRestaurant = {
    foundedIn: 1990,
    ...restaurant,
    founder: "KhoiNguyen"
};
console.log(newRestaurant);// new Obj bao gồm cả những thuộc tính mới và phần tử obj restaurant

/**
 * ? Tại sao chúng ta ko thể console.log(...restaurant)
 * * dữ liệu được toán tử spread phân tách không cố định. Có thể ở dạng arr hoặc obj
 * * chính vì không cố định như vậy =>> console.log không chấp nhận đối số dạng nảy
 * ? Thay vì tạo bản sao rồi nhét vào 1 biến thì sao ta không gán luôn vào đối tượng đó
 * * Nếu bạn khai báo như restaurantCopy3 thì nó sẽ tham chiếu tới obj gốc luôn.  
 * * =>> restaurantCopy3 thay đổi gì thì restaurant thay đổi như vậy (ví dụ trường hợp ở dưới là "name" )
 * * Tạo bản sao thì ngược lại, restaurantCopy3, restaurant là 2 obj khác nhau nhưng có method và thuộc tính giống nhau
 * TODO-TIPS: khi bạn muốn tạo 1 obj giống giá trị (thuốc tính, method) mà khi thay đổi không ảnh hưởng tới phần tử gốc (obj gốc) thì :
 * TODO step 1: gán obj có spread vào 1 biến
 * TODO step 2: sau khi gán xong thì bạn muốn thao tác thế nào với nó thì cũng ko thay đổi 
 * ! lưu ý là chỉ obj, arr có cái ảnh hưởng đến giá trị gốc này
 */
// ví dụ về tham trị trong JS
let khoi = [1,2,3];
let t = khoi;
t[0]= 'chat';
console.log(t);
console.log(khoi);

let restaurantCopy2 = {...restaurant};
// console.log(...restaurantCopy2);// bug vì console.log không chấm nhận đối số dạng này
restaurantCopy2.name = 'test Case';
console.log(restaurantCopy2.name);//output: test Case
console.log(restaurant.name);//output: test Case

let restaurantCopy3 = restaurant;
restaurantCopy3.name ='khoi';
console.log(restaurant.name); //output: khoi


