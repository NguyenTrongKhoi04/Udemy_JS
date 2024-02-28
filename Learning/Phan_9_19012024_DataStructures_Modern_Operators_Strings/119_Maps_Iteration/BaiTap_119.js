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

/**
 * * sử dụng những dữ liệu trên 
 * TODO 1) Dự đoán output console.log(Object.entries(openingHours));
 * TODO 2) Dự đoán output hoursMap = new Map(Object.entries(openingHours));console.log(hoursMap);
 *          ? Giải thích output vì sao như vậy
 *          ? Kiểu dữ liệu Map vs Set khác nhau chỗ nào
 * TODO 3) Dự đoán output console.log(Question.get('question')); 
 * TODO 4) Use for-of để in ra những giá trị nếu key của chúng là number (gợi ý: sử dụng typeof)
 *          ? Theo format `Answer ${key}: ${value}`
 *          ? Ex: "Answer 1: C"
 * TODO 5) Dự đoán output "let so1 =1;let so2 =2; console.log(so1+so2);"
 * TODO 6) const answer = Number(prompt('Your Answer'))
 *          ? Nếu user nhập 
 *              giống với giá trị của key'correct' của Map'question' =>> in ra value của key'true' 
 *              Ngược lại, nếu nhập ko trùng =>> in ra value của key'false' (Try again)
 *          ! Không dùng if & toán tử 3 ngôi
 * TODO 7) Chuyển question từ kiểu Map -> Arr. Đưa ra kết luận sau khi chuyển đổi
 * TODO 8) Dự đoán output 
 *          ? console.log(question.entries()); 
 *          ? console.log(question.keys()); 
 *          ? console.log(question.values());
 *          ? console.log([...question.entries()]); 
 *          ? console.log([...question.keys()]); 
 *          ? console.log([...question.values()]);
 *          ! Đưa ra kết luận về sự khác nhau của data được in ra 
 * TODO 9) Xóa phần tử '2' của Map'question'
 */