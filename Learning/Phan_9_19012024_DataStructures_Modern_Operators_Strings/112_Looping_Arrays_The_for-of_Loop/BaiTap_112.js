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

/**
 * * Sử dụng những dữ liệu trên
 * TODO 1) khai báo biến "menu" là arr chứa các phần tử restaurant.startMenu & restaurant.mainMenu
 * TODO 2) dùng for of. Giải thích cấu trúc và cách hoạt động của nó và dùng nó để "console.log();" từng phần tử "menu".
 * TODO 3) for of để "console.log();" ra STT và giá trị của từng phần tử arr "menu". Ví dụ:
 *              [0,"Focaccia"]  [1,"Brushchetta"]  [2,"Garlic"]  [*cấu trúc tương tự với phần từ còn lại]
 * TODO 4) In ra theo dạng:
 *              1: Focaccia  2: Brushchetta  3: Garlic  *cấu trúc tương tự với phần từ còn lại
 * TODO 5) dự đoán output và giải thích console.log([...menu.entries()]);
 * TODO 6) Làm phần 4) gọn hơn chỗ STT và value ở console.log();
 *          Như bạn đang thấy thì ta phải truy cập theo thứ tự mảng, ví dụ: item[0] là item[1]
 *              =>> ko phải thông qua biến item nữa
 */