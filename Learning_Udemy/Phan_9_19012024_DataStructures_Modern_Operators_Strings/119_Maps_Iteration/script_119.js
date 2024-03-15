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

const question = new Map([
    ['Question','What is the best programming language in the world'],
    [1,'C'],// đáp án thứ 1
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],// đáp án đúng 
    [true, 'Answer is correct'], // thông báo khi chọn đúng
    [false, 'Try again!']
]); 

// TODO 1)
console.log(Object.entries(openingHours));
console.log(Object.entries(openingHours)[1]);

// TODO 2) 
hoursMap = new Map(Object.entries(openingHours));console.log(hoursMap);
    /**
     * - entries sẽ bổ sung thêm vị trí cho arr, obj nếu không có thì sẽ tự động tạo ra
     * - Như bạn thấy ở dòng số 2 phần 1), khi entries thì ta có [[],[],[]] 
     */

    /**
     * ? sự khác nhau giữa Map và Set
     * - Map theo dạng cấu trúc value => key
     * - Set theo cấu trúc arr bình thường - sẽ ko có vị trí arr
     */
// TODO 3) 
console.log(question.get('Question'))

// TODO 4)
for (const [key,value] of question) { // cách 1
      ((typeof key) == 'number')  && console.log(`Answer ${key}: ${value}`);
}

for (const item of question) { // cách 1
      ((typeof item[0]) == 'number')  && console.log(`Answer ${item[0]}: ${item[1]}`);
}

// TODO 5)
let so1 = '1';let so2 ='2'; console.log(so1+so2);
    //! vì là kiểu string nên cộng ký tự

// TODO 6) 
// const answer = Number(prompt('Your Answer'))
    // console.log( question.get( answer == question.get('correct')));

// TODO 7)
const mapToArr = [...question]; 
console.log(mapToArr);

// TODO 8) 
console.log(question);
console.log(question.entries()); // ! use như k sử dụng, output vẫn giống với dòng trên
console.log(question.keys());
console.log(question.values());

console.log([...question.entries()]); 
console.log([...question.keys()]);
console.log([...question.values()]);

// TODO 9)
question.delete(2);
console.log(question);

let khoi = new Set();

// TODO Mở Rộng: typeof để check kiểu dữ liệu
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof {}; // "object"
typeof function() {}; // "function"
typeof undefined; // "undefined"
