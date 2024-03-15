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

/**
 * * Sử dụng dữ liệu trên 
 * TODO 1) Dự đoán output "orderSet = new Set(arr); console.log(orderSet);" 
 * TODO 2) Dự đoán output console.log(new Set('Joanas'));. Đưa ra kết luận về "set"
 * TODO 3) In ra tổng số phần tử của orderSet.
 * TODO 4) Kiểm tra "Bread" và "Pizza", "pizza" có nằm trong orderSet k
 *          Nếu có => in ra true và ngược lại in ra false
 *          Ko dùng vòng lặp 
 * TODO 5) Thêm "Garlic Bread" vào orderSet. Nếu thêm 2 lần thì output của "console.log(orderSet);" là gì
 * TODO 6) Xóa phần tử "Risotto" 
 * TODO 7) Dự đoán output "console.log(orderSet[0]);"
 * TODO 8) Dự đoán output "for (const order of orderSet) console.log(order);" orderSet là obj hay arr
 * TODO 9) let staff = new Set(arr) 
 *             ? Làm sao để biến staff từ obj -> arr
 *             ? vẫn giữ đúng tính unique phần tử giống Set
 * TODO 10) Dự đoán output "console.log(new Set(arr).size);"
 * TODO 11) In ra phần tử đầu tiên của "let check = new Set(arr)".
 * TODO 12) Dự đoán output của :
 *          console.log(new Set('khhhoiiio'));
 *          console.log(new Set('khhhoiiio').size);
 * TODO 13) Xóa toàn bộ phần tử của orderSet (ko dùng vòng lặp) 
 */