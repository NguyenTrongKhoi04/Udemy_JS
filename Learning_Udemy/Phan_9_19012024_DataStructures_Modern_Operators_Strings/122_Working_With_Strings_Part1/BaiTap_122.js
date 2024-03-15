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

const airline = 'TAP Air Portugal';
const plane = 'A320';

/**
 * * Sử dụng dữ liệu trên
 * TODO 1) in riêng từng ký tự 'A','3','2' của str plane
 * TODO 2) Dự đoán output: 
 *          ? console.log('B737'[0]);
 *          ? console.log(plane[6]);
 *          ? console.log(plane[-1]);
 * TODO 3) In ra độ dài của chuỗi str 'plane'
 * TODO 4) Lấy ra ký tự 'r' đầu và cuỗi trong airline 
 *          ? Hiểu đơn giản là lấy ra chữ r 
 *          ! Không được dùng vị trí chữ để in ra (airline[6], airline[10]...)
 * TODO 5) Dự đoán output của
 *          ? "console.log(airline.indexOf('Portugal));"
 *          ? "console.log(airline.indexOf('portugal));"
 * TODO 6) Tôi muốn 
 *          ? in ra "Air Portugal" từ biến airline
 *          ? in ra "Air" từ biến airline
 * TODO 7) Dự đoán output:
 *          ? console.log(airline.slice(0,))
 *          ? console.log(0, airline.slice(0, indexOf(' ')));
 *          ? console.log(0, airline.slice(lastIndexOf(' ') + 1)); =>> vì sao lại "+1"
 *          ? console.log(0, airline.slice(-2));
 *          ? console.log(0, airline.slice(1, -1));
 * TODO 8) Cách hoạt động của hàm slice nếu đối số là số âm ?  
 * TODO 9) TIP lấy ra ký tự cuối cùng và đầu tiên của 1 str ? 
 * TODO 10) viết 1 func để nhập số vé ngồi là biết vị trí đó có ở giữa hay k? 
 *            Vé có format: số-chữ (1B, 3K, 4D,...)
 *            Biết vé có chữ D, E là vé ngồi giữa
 *            Ex: 2D =>> vị trí của bạn ở giữa máy bay 
 * TODO 11) Tìm hiểu cách hoạt động
 *          ? (Ôn tập obj) console.log(openingHours['fri']); =>> output ?
 *          ? (Ôn tập obj) if(openingHours.fri == openingHours['fri'])
 *          ? Tại sao 1 đối tượng nguyên thủy-"airline" có method như 1 obj (.length, .slice, ...)
 *          ? "primitive value" & "boxing called" là gì 
 *          ? Giải thích hoạt động của "boxing called" và hậu sau khi thực hiện xong "boxing called"
 *          ? Biến có bị thay đổi kiểu dữ liệu k 
 */
