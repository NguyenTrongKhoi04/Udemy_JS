'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * *Sử dụng những dữ liệu đã có 
 * TODO 1) Tất cả các giá trị arr "movements" nhân với 2 rồi nhét chúng vào biến "movementsUSDfor" 
 *          ? use "for of"
 *          ? use method ".map()"
 * TODO 2) Hoạt động của method "map()"
 * TODO 3) Tạo func "movementsDesciptions".
 *          ? Sử dụng method "map()"
 *          ? Đối với mỗi lần duyệt qua 1 phần tử của arr "movements", ktra nếu (value > 0) ? `Movements 1: you deposite ${value}` : `Movements 1: you withdrew ${value}`  
 *                ! Gom tất cả các phần tử in đc vào arr "movementsDesciptions"
 * TODO 4) các đối số trong func của "map()" có giống với đối số func của "forEach" k? 
 * TODO 5) Điểm đặc biệt của "map()" trong phần 2) 
 */

// TODO 1)
      // Cách 1
   let  movementsUSDFor = []; // Declare an empty array to store the results.
   for (const i of movements) {
         movementsUSDFor.push(i * 2);  
   }
   console.log(movementsUSDFor);
      // Cách 2
   const movementsUSD = movements.map( mov => mov*2 );
               // ! viết tắt của function (mov){mov*2}
               // arrow func có 1 dòng =>> mặc định bản thân nó sẽ return =>> k cần return 
   console.log(movementsUSD); 

// TODO 2) 
      //* method "map()" sẽ thao tác với từng phần tử để ra kết quả và sau đó map sẽ nhét phần tử mới đó vào 1 arr riêng

// TODO 3) 
const movementsDesciptions = movements.map(
   (value, index, arr) => 
      `Movements ${index +1}: You ${value > 0 ? "deposite" : "withdrew"} ${value}`       
      // use arrow func 
);
console.log(movementsDesciptions);

// TODO 4) 
   // Giống với đối số trong forEach
   // đối số nào muốn bỏ qua =>> use "_"

// TODO 5) 
   // đó chính là gom các kết quả in ra thành các phần tử vào trong 1 arr 
   // ! luôn nhớ 3 method "map(), filter(), reudce()" đều trả về 1 arr
   // ! 3 method trên luôn càn func có return (ví dụ arrow func phần 2 thì mặc đính nó trả lại vì có 1 dòng)