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
let arr = ['Paste','Pizza','Pizza','PizZa','Risotto'];

// TODO 1) 
orderSet = new Set(arr); console.log(orderSet); // Kiểu 'set' sẽ loại đi những phần từ trùng lặp

// TODO 2) 
console.log(new Set('Joanas'));
    /**
     * set loại bỏ những dữ liệu trùng lặp 
     * ! Set phân biệt hoa thường
     * như ở đây thì set sẽ tự bocs tách thành 1 mảng gồm các chữ cái ('a' lặp lại => set chỉ lấy 1 chữ 'a')
     */

// TODO 3) 
console.log([...orderSet].length); //hard code
console.log(orderSet.size);

// TODO 4) 
console.log(orderSet.has('Bread'));
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("pizza"));

// TODO 5) 
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);// Có thêm phần tử mới và không bị trùng lặp 

// TODO 6) 
orderSet.delete('Risotto');
console.log(orderSet);

// TODO 7)
console.log(orderSet[0]);// ! set k phải arr, là dạng giống obj

// TODO 8)
for (const order of orderSet) console.log(order);
console.log(typeof orderSet); // là kiểu obj nhá

// TODO 9)
let staff = [...new Set(arr)];
console.log(staff);

// TODO 10) 
console.log(new Set(arr).size);

// TODO 11) 
let check = new Set(arr);
console.log([...check][0]);

// TODO 12)
console.log(new Set('khhhoiiio'));
console.log(new Set('khhhoiiio').size);

// TODO 13)
orderSet.clear();
console.log(orderSet);