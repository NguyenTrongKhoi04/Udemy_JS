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

let users = [
    { name:"khoi", email: "khoi@gmail.com" },
    { name:"tuan", email: "tuan@gmail.com" }
];

// TODO 1)
console.log(restaurant.openingHours.mon); // ouput: Undefined
// console.log(restaurant.openingHours.mon.open);// bug vì "mon" ko tồn tại nên ko có open 

// TODO 2)
if(restaurant.openingHours.mon && restaurant.openingHours){
    console.log(restaurant.openingHours.mon.open)} 

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
    /**
     * * Giải thích
     * Optional Chaining (?.) là chuỗi tùy chọn
     * nghĩa là nếu vế bên trái nó đúng thì mới có vế bên phải
     * =>>> có mở cửa thì mới có mở thứ 2 và có mở cửa thứ 2 thì có open của "mon"
     */

// TODO 3) 
let c = [[1,2],['a','b']];console.log(c?.[1]?.[1]);

// TODO 4) 
for (const item of weeksday) {
        let open = restaurant.openingHours[item]?.open ??  "closed" ;
            /**
             * ? [item] ngoặc vuông là vì item chính là từng phần tử của openingHours
             */
        console.log(`On ${item}, We open at ${open}`);
}

// TODO 5)
(restaurant.opl) ? console.log(restaurant.opl(0,1)) : console.log('method does not exist');
    // =>> nếu tồn tại phương thước, thuộc tính "opl" của restaurant thì gọi hàm "opl" với đối số "(0,1)"
    // =>> ko tồn tại => in ra "method ...." 
    
console.log(restaurant.opl?.(0,1) ?? "method does not exist");
    // Lưu ý: dùng ?? thay vì || để phòng trường hợp func có kết quả = 0 (return 0)

// TODO 6) 
if(users.length > 0) console.log(users[0].name); else console.log('user arr empty');
    // nếu arr "user" ko rỗng =>> in ra tên của user đầu tiên

console.log(users[0]?.name ?? 'user arr empty');

users = [];
console.log(users[0]);
console.log(users[0]?.name ?? 'user arr empty');