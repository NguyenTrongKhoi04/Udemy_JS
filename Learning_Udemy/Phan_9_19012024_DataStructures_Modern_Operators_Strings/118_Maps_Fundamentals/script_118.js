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

// TODO 1)
let rest = new Map();console.log(rest);

// TODO 2) 
rest.set('name','Casino');
rest.set(1,'Frank italia');
console.log(rest);
    //! Map là kiểu cấu trúc dữ liệu key => value và không có vị trí phần tử 

// TODO 3)
console.log(rest.set(2,'Lisbon, Portugal')); 

// TODO 4) 
rest.set('category',['Italian', 'Pizzeria', 'Vegetarian']);
console.log(rest);
    // ! key => value. value có thể chứa mọi kiểu dữ liệu khác nhau

// TODO 5) 
rest.set('category',restaurant.categories);console.log(rest);// ghi đè lên bản ghi của category trc đó trong 'rest'
rest.set('category2',restaurant.categories).set('open',11).set('close',23); console.log(rest);

// TODO 6) 
rest.set(true, 'We open :D').set(false, 'We closed :(');
    // chỉ đơn giản là thêm giá trị vào thôi
    // ! key => value. 'key' chấp nhận mọi loại giá trị
    console.log(rest);

// TODO 7)
console.log(rest.get('name'));
console.log(rest.get(true));

// TODO 8)
console.log(rest.get('1')); // str '1' không tồn tại
    // ! Lưu ý trong Map thì 'key' sẽ phần biệt str và number
    // ! tức là khi bạn set('1','str') & set(1,'number') =>> '1' != 1 khi gọi để lấy giá trị

// TODO 9)
let time = 21;
console.log(rest.get(rest.get('open')<time && rest.get('close')>time));
    // TODO TIPS: user true, false trong arr

// TODO 10)
console.log(rest.has('category'));

// TODO 11) 
rest.delete(2);console.log(rest); //! =>> 2 != '2'
console.log(rest.size);

// TODO 12) 
rest.clear();
console.log(rest);

// TODO 13
rest.set([1,2], 'test'); console.log(rest.get([1,2]));
    /**
     * ! [1,2] ở set và get ko cùng 1 đổi tượng
     * TODO TIPS: cách khắc phục là bạn tạo 1 biến nữa và gán vào
     */
const arr = [1,2];
rest.set(arr, 'test'); console.log(rest.get(arr));
console.log(rest);

// TODO 12) 
rest.set(document.querySelector('h1'),'Heading');console.log(rest);

/**
 * ! Mỗi mảng thì sẽ tương ứng với 1 đối tượng
 */
a = new Map();
a.set(1,'khoi');a.set('hai','tuan');
console.log(a);

let b = new Map([ //? bài sau sẽ học khai báo kiểu này
    ['hai',2],['tu','HN']
]);
console.log(b)
