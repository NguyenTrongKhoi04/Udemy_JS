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

// TODO 1)
let menu = [...restaurant.startMenu,...restaurant.mainMenu];
console.log(menu);

// TODO 2) 
for (const item of menu) {
    console.log(item);
}

// TODO 3)
for (const item of menu.entries()) {
    console.log(item);
}

// TODO 4) 
for (const item of menu.entries()) {
    console.log(`${item[0]+1} là ${item[1]}`);
}

// TODO 5) 
console.log([...menu.entries()]);// ouput giống 3). Ở đây chúng ta sử dụng destructur

// TODO 6) 
for (const [key,value] of menu.entries()) {
    console.log(`${key+1} là ${value}`);
}