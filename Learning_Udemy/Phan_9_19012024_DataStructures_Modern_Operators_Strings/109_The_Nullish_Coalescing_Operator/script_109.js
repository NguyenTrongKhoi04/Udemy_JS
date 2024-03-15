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

restaurant.numGuests = 0;
let guests = restaurant.numGuests ? restaurant.numGuests : 10;// bad code
console.log(guests);

//TODO 1) 
/**
 * * Nullish = null + ish (null+ underfined) 
 * * Toán tử "??" sẽ trả về bên phải nếu bên trái của nó là nullish
 * * "??" Có tác dụng check xem biếu thức, biến đó có là nullish hay k
 */

//TODO 2) 
//* hiểu đơn giản là nếu biến restaurant.numGuests tồn tại thì lấy gtri của nó
guests = restaurant.numGuests ?? 10;
console.log(guests);