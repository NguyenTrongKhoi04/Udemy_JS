'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 

// TODO 1) 
for (const item of movements) {
    if(item > 0){
        console.log(`User đã nạp ${item} tiền`);
    }else{
        console.log(`User đã rút ${item} tiền`);
    }
}

// TODO 2)
console.log('================================');
movements.forEach(
    function (mov){ //? Các phần tử của arr "movements" sẽ đc truyền thông qua biến 'mov'
        if(mov > 0){
            console.log(`User đã nạp ${mov} tiền`);
        }else{
            console.log(`User đã rút ${mov} tiền`);
        }
    }
);
        /**
         * 👀 Cách hoạt động của forEach 
         * Lần lặp === hành động
         *    0         function(200)
         *    1         function(450)
         *    2         function(-400)
         *   ...        ......
         */

// TODO 3) 
console.log('================================');
for (const [index, value] of movements.entries()) {
    if(value > 0){
        console.log(`Movement ${index + 1}: User nạp ${value} tiền`);
    }else{
        console.log(`Movement ${index + 1}: User rút ${value} tiền`);
    }
}

// TODO 4) 
console.log('================================');
movements.forEach(
    function (value, index, arr){
        if(value > 0){
            console.log(`Movement ${index + 1}: User nạp ${value} tiền`);
        }else{
            console.log(`Movement ${index + 1}: User rút ${value} tiền`);
        }
    }
);
    /**
     * ? value, index, arr chính là (giá trị phần tử, vị trí phân tử, arr chứa phần tử đó)
     * ! Cái giải thích trên là áp dụng với 1 arr bình thường, còn với arr như Map/Set thì để bài sau
     * ! Điểm yếu lớn nhất của forEach là không thể 'break' hoặc 'continue' được
     */
