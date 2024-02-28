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
 *  * entries, keys, values đều trả về kết quả dạng arr
 *  ! nếu là arr => arr.entries(). Nếu là obj => Object.entries(obj)
 *  * entries có thể tách 1 thuộc tính ra dạng ['thuộc tính', 'value']
 *                                       ! ở đây cả 2 đầu là kiểu str
 */

// TODO 1)
for (const i of Object.keys(openingHours)) {
    console.log(i);
}

// TODO 2) 
a = Object.keys(openingHours); // a = [chứa những phần tử]
console.log(a);

// TODO 3) 
day_open = '';
for (const item of Object.keys(openingHours)) {
    day_open += item + " "; 
}
console.log(`we are open on ${Object.keys(openingHours).length} days: ${day_open} `);

// TODO 4) 
console.log(Object.values(openingHours));// 1 arr gồm 3obj

// TODO 5)
console.log(Object.entries(openingHours));
    // 1 arr gồm 3 arr, entries giúp ta biết vị trí của phân tử
    // ! for of không thể dùng với đối tượng 
    // Khi ta muốn thao tác với các phần tử của đổi tượng ở trong vòng lạp for 
    /**
     * * Ví dụ phần tử "fri:{open:11,close:23,}" 
     * TODO 1) Sau khi entries obj này =>> [fri,{open:11,close:23}]
     * TODO 2) Bạn có thể thao tác với các phần tử và giá trị của phần tử đó (có thể sử dựng destructor)
     * ? khi ta muốn thao tác phần tử của obj trong vòng lặp for =>> use Object.entries
     */ 

// TODO 6)
    // cách 1
for (const item of Object.keys(openingHours)) {
    console.log(`On ${item} we open at ${Object.values(openingHours[item])[0]} and closed at ${Object.values(openingHours[item])[1]}`);    
}

    // cách 2
for(const [key, {open, close}] of Object.entries(openingHours)){
    console.log(`On ${key} we open at ${open} and closed at ${close}`);    
}

// TODO 7)
a={1: 'a',2: 'b1',3: 'c'};
for (const item of Object.entries(a)) {
    console.log(item);   
}