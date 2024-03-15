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
    }
}
let khoi = [1,2,3];
/**
 * ? sự khác nhau giữa destructur và spread. khi nào cái nào
 * ? tại sao ta không thể console.log(...a); // biết a = {}
 * * Sử dụng những dữ liệu trên 
 * TODO 1) tạo biến "mainMenuCopy" có phần tử giống restaurant.mainMenu
 * TODO 2) tách chuỗi "jonas" thành mảng chứa từng chữ cái. In ra chữ cái đầu tiên của mảng
 * TODO 3) Use prompt và viết func in ra những dữ liệu vừa nhập (không giới hạn prompt)
 * TODO 4) khai báo 1 obj có phần tử giống với obj restaurant (use spread) 
 *          ? nếu ta thêm "name" vào obj đó thì sẽ ra sao (2 name này != k, obj mới có tham chiếu tới obj restaurant k)
 * TODO 5) "console.log(...khoi);" có j khác so với "console.log(khoi);"
 * TODO 6) Đoán output của "restaurantCopy2.name = 'test Case';console.log(restaurantCopy2.name);console.log(restaurant.name);"
 * TODO 7) Đoán output của "let restaurantCopy3 = restaurant;restaurantCopy3.name ='khoi';console.log(restaurant.name);"
 */