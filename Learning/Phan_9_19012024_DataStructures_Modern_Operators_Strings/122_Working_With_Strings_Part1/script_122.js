'use trict';
const weeksday = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours={
    [weeksday[2+1]]:{
        open:12,
        close:22,
    },
    fri:{
        open:11,
        close:23,
    },
    sat:{
        open:0,// open 24 hours
        close:12*2
    },
}
const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    startMenu:['Focaccia','Brushchetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Paste','Risotto'],
    openingHours,

    order(startIndex,mainIndex){
        // ? this chính là obj (restaurant)
        //TODO: bạn cũng có thể viết restaurant.startMenu[startIndex]
        return [this.startMenu[startIndex],this.mainMenu[mainIndex]]
    },

    orderDelivery(obj){
        console.log(obj);
    },

    // định nghĩa tham số của obj
    orderDelivery_2({
        name = '', address = 'HN',startIndex=1,mainIndex=1
    }){
        // in truyền biến vào => dùng `` chứ ko phải dùng ''
        console.log(`Người dùng ${name} có địa chỉ ${address} 
        đặt món ${this.startMenu[startIndex]} và ${this.mainMenu[mainIndex]}`);
    },

    orderPaste(ing1, ing2, ing3){
        // ! muốn gán biến vào chuỗi =>> ``, NOT ""
        // console.log("Món paste của bạn hấp dẫn khi ăn với ${ing1}, ${ing2} và ${ing3}");
        console.log(`Món paste của bạn hấp dẫn khi ăn với ${ing1}, ${ing2} và ${ing3}`);
    },

    orderPizza(ingredient1,...othersIngredient){
        console.log(ingredient1);
        console.log(othersIngredient);
    }
};

/**
 * * "Boxing" thường được hiểu là quá trình chuyển đổi giữa các kiểu dữ liệu nguyên thủy và các đối tượng tương ứng của chúng \
 *      =>> Đối tượng tương ứng có tên là "boxed object"
 *      =>> ví dụ: chuyển đổi một số nguyên thành một đối tượng số nguyên.
 * * Hoạt động của JS khi ta gọi method cho 1 chuỗi str (cụ thể ở đây là airline)
 *      ? => JS sẽ tự động convert chuỗi sang kiểu object rồi sau đó gọi method của nó
 *      TODO 1): airline = new String('airline); =>> khai báo lại để convert sang obj
 *      TODO 2): airline.length, airline.slice =>> sử dụng những method của obj
 *      ? console.log(new String('khoi')); =>> xem toàn bộ trong F12, b sẽ thấy method slice,...
 *      ? console.log(typeof new String('khoi'));
 * * Sau khi thực hiện method =>> "boxed obj" bị loại bỏ và return giá trị ban đầu của nó 
 * ! Tất cả các method str đề trả về kiểu nguyên thủy (primitive) mặc dù nó được gọi trên 1 boxed obj
 */

/**
 * * Hiểu thêm về Boxing called
 */
// ? Boxing called
var myNumber = 42; // Giá trị nguyên thủy
console.log(myNumber.toFixed(2)); // Gọi phương thức toFixed() trên giá trị nguyên thủy
// Sau khi thực hiện phương thức, giá trị nguyên thủy vẫn là số 42, không phải là một đối tượng
console.log(myNumber); // 42
 
// ? return kiểu nguyên thủy (primitive) mặc dù nó được gọi bằng method của 1 boxed obj
console.log(typeof new String('khoi').slice(1)); // output: String