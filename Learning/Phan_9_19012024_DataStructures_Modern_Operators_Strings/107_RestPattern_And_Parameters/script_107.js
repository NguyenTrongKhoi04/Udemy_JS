/**
 * ======================= Rest Pattern and Parameters ======================================
 * * REST use spread nhưng gom n phần tử vào 1 mảng => [...others] = [1,2,3,.....];console.log(others);
 * * Tên arr REST trùng với tên use toán tử spread (ví dụ như trên) và bản thân others là arr khi được REST 
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
    },

    orderPizza: function (ingredient1,...othersIngredient){
        console.log(ingredient1);
        console.log(othersIngredient);
    }
};
// TODO HOME WORK 1)
arr = [1,2,...[3,4]];// ôn tập lại destructur

// TODO HOME WORK 2)
[a,b,...others] = [1,2,3,4,5,'tuan','khoi'];
console.log(a,b,others);

// TODO HOME WORK 3)
let [a1, b1, ...otherFood] = [...restaurant.mainMenu,...restaurant.startMenu];
    //* "...otherFood" luôn nằm ở cuối của arr, vì nó sẽ gom tất cả những phần tử còn lại
console.log(a1,b1,otherFood);
    // let [Pizza, Risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.startMenu];
        //? Nếu bỏ phần tử rỗng đi =>> ...otherFood sẽ lấy cả "Risotto" 
    // console.log(Pizza, Risotto,otherFood);
        // output: Pizza, Paste, ['Risotto', 'Focaccia', 'Brushchetta', 'Garlic Bread', 'Caprese Salad']

// TODO HOME WORK 4)
let {sat, ...others1} = restaurant.openingHours ;
console.log(sat, others1);

// TODO HOME WORK 5)
function add(...numbers){
    let sum = 0;
    for(num of numbers){
        sum += num
    };
    console.log(sum);
};
add(6,7);
add(1,2,3,4,5);

let x=[1,2,3]; add(...x);//output: 6. Vì ...numbers = ...x =>> spread phải giải ra rồi spread của REST gom lại

// TODO HOME WORK 6)
restaurant.orderPizza(...restaurant.mainMenu,...restaurant.startMenu)
    //* vì đang spread để giải all phần tử => ingredient1 = phần tử đầu tiên

// TODO HOME WORK 7) 
function test(a,...b,c){console.log(a,b,c);}// sai vị trí của REST