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
const weeksday = ['mon','tue','wed','thu','fri','sat','sun'];

/**
 * * Sử dụng những dư liệu trên
 * TODO 1) khai báo lại obj resteaurant 
 *          ! cách khai báo ở trên chưa clear code, ta cần phải làm gọn hơn
 *          a) khai báo obj "openingHours" ở ngoài obj restaurant
 *          b) khai báo openingHours vừa tạo ở a) vào trong obj restaurant (thuốc tính openingHours của obj restaurant)
 *          c) Khai báo func gọn hơn (không có từ khóa "func" lúc khai báo). Giải thích vì sao chươn trình biết đó là hàm 
 * TODO 2) Ở khai báo openingHours
 *           a) thay "thu" -> "weeksday[3]" =>> đc k ?
 *           b) thay "thu" -> "[weeksday[3]]" =>> đc k ?
 *           c) Sử dụng biểu thức tính toán để tính ra weeksday[3] (ví dụ: [weeksday[... + ...]])
 */