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
        
    }
};

/**
 * * Sử dụng những dữ liệu trên 
 * TODO 1) cho [3,4] thành các phẩn tử cuối của "arr = [1,2]" //output; [1,2,3,4]
 * TODO 2) [1,2,...n_phần_tử...]. Nhét "1,2" vào biến "a,b". Biến "others" chứa all phần tử của "n_phần_tử"  
 * TODO 3) let [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.startMenu]; console.log(Pizza, Risotto,otherFood);
 *          ? output
 *          ? có thể đảu "...otherFood" lên đầu được k? vì sao
 *          ? nếu ta xóa dấu "," => let [Pizza, Risotto, ...otherFood] thì phần tử "Paste" có bị bỏ qua khi khai báo k 
 * TODO 4) tương tự với cách khai báo phần 3), hãy khai báo đối tượng để lấy ra "sat" và "n_phần_tử"( ở đây là thu, fri) của obj restaurant.openingHours
 * TODO 5) Viết func add tính tổng toàn bộ số nhập vào ("n_số_nhập_vào")
 *          ? output: let x=[1,2,3]; add(...x);. Giải thích 
 * TODO 6) viết func orderPizza() vào obj restaurant, gán đối số đầu tiên vào 1 biến, các đối số còn lại gom ở dạng mảng. Trong func thì console.log() 2 biến kia
 *          ? output: orderPizza(...restaurant.mainMenu,...restaurant.startMenu)
 *          ? output: nếu nhập 1 đối số
 * TODO 7) function test(a,...b,c){console.log(a,b,c);} =>> ouput
 */
let [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.startMenu]; console.log(Pizza, Risotto,otherFood);