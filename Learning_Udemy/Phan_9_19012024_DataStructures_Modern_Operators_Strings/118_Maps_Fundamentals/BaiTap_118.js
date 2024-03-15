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

    '1':[1,2] 
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
 * * Sử dụng dữ liệu ở trên 
 * TODO 1) Dự đoán output "let rest = new Map();console.log(rest);"
 * TODO 2) Thêm 2 phần tử ('name','Casino') & (1,'Frank italia') vào rest 
 *          ? Kết luận về kiểu thể hiện dữ liệu của Map()
 *          ? Có phải là kiểu Key => value ko ?
 * TODO 3) Dự đoán output "console.log(rest.set(2,'Lisbon, Portugal'));"
 * TODO 4) Thêm phần tử ('category',['Italian', 'Pizzeria', 'Vegetarian'])
 * TODO 5) Dự đoán output 
 *          ? rest.set('category',restaurant.categories);console.log(rest);
 *          ? rest.set('category2',restaurant.categories).set('open',11).set('close',23); console.log(rest);
 * TODO 6) Dòng này có bị bug k: "rest.set(true, 'We open :D').set(false, 'We closed :(')"
 * TODO 7) In ra giá trị của phần tử "name", "true" của Map "rest"
 * TODO 8) Dự đoán output "console.log(rest.get('1'));"
 * TODO 9) let time = 21; dựa vào nó để in ra có mở cửa trong open-close của rest k ? (time là biến động, thay đổi tùy ý)
 *          ! Lưu ý: ko dùng if & toán tử 3 ngôi
 * TODO 10) Kiểm tra nếu có phần tử 'category' trong rest thì in ra true và ngược lại
 * TODO 11) Xóa phần tử "2" trong rest. In ra tổng số phần tử trong rest 
 * TODO 12) Xóa tất cả phần tử trong rest
 * TODO 13) Dự đoán output: "rest.set([1,2], 'test'); console.log(rest.get([1,2]));"
 *             ? giải thích vì sao ra output như vậy
 *             ? Có cách nào khắc phục bug này không
 * TODO 14) "rest.set(document.querySelector('h1'),'Heading');console.log(rest);". F12 và di chuột vào phần tử 'h1' ở Bảng điều khiển xem hiện tượng gì xảy ra
 */