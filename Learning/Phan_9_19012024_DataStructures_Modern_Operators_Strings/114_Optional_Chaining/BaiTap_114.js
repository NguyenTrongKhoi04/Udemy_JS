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

let users = [{ name:"khoi", email: "khoi@gmail.com" }];

/**
 * * Sử dụng những dữ liệu đã cho
 *  TODO 1) console.log(restaurant.openingHours.mon.open); => dự đoán output, giải thích output 
 *  TODO 2) if(restaurant.openingHours.mon && restaurant.openingHours){console.log(restaurant.openingHours.mon.open)}
 *          ? giải thích khối code: nếu cửa hàng mở cửa và mở cửa vào thứ 2 =>> in ra giờ mở cửa thứ 2
 *          a) rút gọn khối code trên (Lưu ý: Nếu k có 'mon' hoặc k có 'open' của 'mon' thì khi chạy chương trinh vẫn k bị lỗi
 *          b) giải thích cách rút gọn đó
 *  TODO 3) Dự đoán output "let c = [[1,2],['a','b']];console.log(c?.[1]?.[1]);"
 *  TODO 4) dùng for để in ra những ngày cửa hàng mở cửa và đóng cửa 
 *          ? Yêu cầu 1: dùng for of
 *          ? Yêu cầu 2: in mở cửa và đóng cửa dạng sau "On mon, we open at closed", "On thu, we open at 12" 
 *  TODO 5) (restaurant.opl) ? console.log(restaurant.opl(0,1)) : console.log('method does not exist');; 
 *          a) Giải thích khối code trên 
 *          b) rút gọn khối code trên (dùng chuỗi tùy chọn "?.")
 *  TODO 6) if(users.length > 0) console.log(users[0].name); else console.log('user arr empty');
 *          a) giải thích khối code trên 
 *          b) rút gọn khối code trên
 *          c) nếu cho "users =[]" =>> dự đoán output của khối code trên
 */