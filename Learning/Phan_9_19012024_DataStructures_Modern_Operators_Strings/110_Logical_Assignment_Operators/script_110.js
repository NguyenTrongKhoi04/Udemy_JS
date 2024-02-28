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

let rest1 = {
    name: 'Capri',
    numGuests: 20
};
let rest2 = {
    name: "shop",
    owner: 'Khoi Nguyen'
}

//TODO 1)
//* "||" dừng lại và lấy giá trị khi gặp truthy
 rest1.numGuests = rest1.numGuests || 10;
 console.log(rest1); //Output: 20
 rest2.numGuests = rest2.numGuests || 10; 
 console.log(rest2);//Output: 10

//TODO 2)
rest1.numGuests ||= 10;
console.log(rest1.numGuests);
rest2.numGuests ||= 10;
console.log(rest2.numGuests);

//TODO 3)
rest1.numGuests = 0;
rest1.numGuests = rest1.numGuests || 10; 
console.log(rest1);//Output: 10 vì "||" lấy gtri truthy

rest1.numGuests = 0;
rest2.numGuests ??= 10;
console.log(rest2);

//TODO 4)
 rest1.numGuests ??= 10; console.log(rest1.numGuests);//Output: 20 vì  rest1.numGuests tồn tại
 rest2.numGuests ??= 10; console.log(rest2.numGuests);//Output: 10
 rest2.numGuests=undefined; rest2.numGuests ??= null; console.log(rest2.numGuests);
        //Output: null vì "??" sẽ trả về giá trị bên phải nếu bên trái nó là nullish

//TODO 5) 
rest1 = {
    name: 'Capri',
    numGuests: 20
};
rest2 = {
    name: "shop",
    owner: 'Khoi Nguyen'
};

rest1.owner = rest1.owner && 10;
console.log(rest1);//{name: 'Capri', numGuests: 20, owner: underfined} 
                    // vì "&&" sẽ stop và lấy luôn giá trị của falsy
rest2.owner = rest2.owner && 10; 
console.log(rest2);//{name: 'shop', owner: 10}

//TODO 6)
rest1 = {
    name: 'Capri',
    numGuests: 20
};
rest2 = {
    name: "shop",
    owner: 'Khoi Nguyen'
}

rest1.owner &&= 'ANYNOMOUS';console.log(rest1);//{name: 'Capri', numGuests: 20}
rest2.owner &&= 'ANYNOMOUS';console.log(rest2);//{name: 'shop', owner: 'ANYNOMOUS'}
/**
 * ? lý do "rest1.owner &&= 10;console.log(rest1);" khác value "rest1.owner = rest1.owner && 10;console.log(rest1);" 
 * ? Hiểu đơn giản thì " = &&" khác "&&="
 * * "&&=" thì sẽ ngừng lại luôn =>> ko thực hiện lệnh gán 
 *      trong trường hợp này thì rest2.owner là falsy =>> stop luôn ở đó và k lm j thêm
 * * "&&=" bản chất sẽ ko gán được khi nó gặp giá trị fasly
 * 
 * * = &&" vẫn là 1 lệnh gán vì nó có dấu "=" 
 * * = &&" =>> lấy giá trị được trả về từ biểu thức "rest1.owner && 10" rồi gán vào biến rest1
 */