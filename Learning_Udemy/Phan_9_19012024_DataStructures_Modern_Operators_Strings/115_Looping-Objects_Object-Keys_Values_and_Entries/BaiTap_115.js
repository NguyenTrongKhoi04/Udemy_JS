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
 * * Sử dụng những dữ liệu cho sẵn 
 *  TODO 1) dùng for of và ".keys" để in ra các key của openingHours 
 *  TODO 2) Dự đoán output "console.log(Object.keys(openingHours));"
 *  TODO 3) In ra `we are open on ${tổng số ngày mở cửa} days: ${Những ngày mở cửa}`
 *  TODO 4) Dự đoán output của "console.log(Object.values(openingHours));"
 *  TODO 5) Dự đoán output của "console.log(Object.entries(openingHours));"
 *  TODO 6) In tất cả "ngày giờ-hđ giờ-closed" theo dạng "On fri we open at 11 and close at 23"
 *  TODO 7) a={1: 'a',2: 'b1',3: 'c'}; Tách 1 phần tử và giá trị thành 2 phần tử của mảng. 
 *          Ví dụ: ['1', 'a']  ['2', 'b1']  ['3', 'c']
 */