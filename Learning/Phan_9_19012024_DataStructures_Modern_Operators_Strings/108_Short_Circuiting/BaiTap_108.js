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
    },

    orderPizza: function (ingredient1,...othersIngredient){
        console.log(ingredient1);
        console.log(othersIngredient);
    }
};
restaurant.numGuests = 23;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
if(restaurant.orderPizza){
    restaurant.orderPizza('paste','tomato');
};
/**
 * * Sử dụng những dữ liệu trên 
 * TODO 1) "truthy & falsy" là gì ?
 * TODO 2) dự đoán output và đưa ra kết luận về hoạt động của toán tử "||"
 *          ? console.log(3 || 'Jonaas');
 *          ? console.log('' || 'Jonas');
 *          ? console.log(true || 0);
 *          ? console.log(undefined || null);
 *          ? console.log(undefined || 0 || '' || "HELLO" || 23 || null);
 * TODO 3) Dùng toán tử "||" để viết lại code dòng 55. 
 * TODO 4) Dự đoán output nếu "restaurant.numGuests = 0" dòng 55
 * TODO 5) dự đoán output và đưa ra kết luận về hoạt động của toán tử "&&"
 *          ? console.log(0 && 6);
 *          ? console.log(5 && 'khoi');
 *          ? console.log('HELLO' && 4 && null && 23);
 * TODO 6) Dùng toán tử "||" để viết lại khối if (56-58). 
 */