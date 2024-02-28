/**
 * ======================= Rest Pattern and Parameters ======================================
 * 
*/
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
restaurant.numGuests = 23;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
if(restaurant.orderPizza){
    restaurant.orderPizza('paste','tomato');
};

// TODO 1) 
/**
 * 1 giá trị "truthy" khi trong 1 bối cảnh cụ thể dược đánh giá là true. Giá trị "falsy" thì ngược lại
 * * Những giá trị được xem xét là "falsy" 
 *     * false: Giá trị boolean false
 *     * 0: Số 0
 *     * '': chuỗi rỗng
 *     * null: Giá trị null
 *     * undefined: Giá trị chưa được khai báo
 *     * NaN: Not A Number - kết quả 1 phép toán ko hợp lệ 
 */

// TODO 2)    
// * "||" dừng lại khi nó thấy giá trị truthy
 console.log(3 || 'Jonas');// Output: 3 =>> nếu 2 giá trị đều truthy thì lấy cái đầu 
 console.log('' || 'Jonas');// Output: Jonas =>> dầu: falsy, sau: truthy
 console.log(true || 0);// Output: true =>> "||" dừng lại khi nó thấy giá trị truthy
 console.log(undefined || null);// Output: null =>> 2 giá trị falsy thì lấy cái cuỗi
 console.log(undefined || 0 || '' || "HELLO" || 23 || null); // Output: HELLO

 // TODO 3)
 console.log(guests1);// output: 23
 guests1_check = restaurant.numGuests ||= 10;
 console.log(guests1_check);// output: 23

 // TODO 4)
 restaurant.numGuests = 0;
 guests1_check = restaurant.numGuests ||= 10;
 console.log(guests1_check);// output: 10

// TODO 5)    
// * "&&" dừng lại khi nó thấy giá trị falsy
console.log(0 && 6);//Output: 0
console.log(5 && 'khoi');// Output: 'khoi' =>> nếu cả 2 truthy thì lấy gtri cuối
console.log('HELLO' && 4 && null && 23);// Ouput: null

//TODO 6)
// * TỒn tại thì triển khai khối code trong "{}"
if(restaurant.orderPizza){
    restaurant.orderPizza('paste','tomato');
};
test = restaurant.orderPizza && restaurant.orderPizza('paste','tomato');
/**
 * * Nếu restaurant.orderPizza ko tồn tại thì trả ra gí trị falsy =>> stop ở đó và k lạm thêm
 * * Nếu restaurant.orderPizza tồn tại =>> restaurant.orderPizza và restaurant.orderPizza() đều là truthy =>> Lấy cái cuối
 */