'use strict';

let arr =['a','b','c','d','e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// TODO 1)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
    // ! slice trả ra 1 bản sao 
// TODO 2)
    /**
     * không có sự khác biệt về output. nếu chỉ là gom phần tử thif2 cách như nhau 
     * ! Nhưng cách dùng 'slice()' thì sẽ nối được method tiếp theo vào sau đó luôn còn destructor thì không
     */

// TODO 3)
arr.splice(2,3); // 2 là vị trí bắt đầu cắt, 3 là số phần tử được cắt 
    /**
     * * Hàm splice() cho phép xóa 1 hoặc nhiểu phần tử, nó tác động thẳng vào mảng gốc 
     * ! Cú pháp hàm splice khác so với slice 
     *      ! =>> splice(index_start, count_delete)
     *      ! =>> slice(index_start, index_end)
     */

// TODO 4) 
arr2.reverse(); // <=> console.log(arr2.reverse());
console.log(arr2);

// TODO 5) 
arr =['a','b','c','d','e']; // viết lại để tý nối mảng cho đẹp 😊
console.log([...arr,...arr2]);
const letters = arr.concat(arr2);console.log(letters); 
    // ! 2 cách này như nhau nhưng muốn nối thêm '.method' => use concat

// TODO 6) 
console.log(letters.join(' - '));

// TODO 7)
    /**
     * ? pop() => Loại bỏ phần tử cuối cùng của mảng và trả về phần tử đó.
     * ? Shift() =>  Loại bỏ phần tử đầu tiên của mảng và trả về phần tử đó.
     * ? push() => Thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
     * ? unshift() => Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
     * ? indexOf(): Trả về chỉ mục đầu tiên của một phần tử trong mảng nếu nó tồn tại, nếu không trả về -1.
     * ? lastIndexOf(): Trả về chỉ mục cuối cùng của một phần tử trong mảng nếu nó tồn tại, nếu không trả về -1.
     * ? split(): Chia một chuỗi thành một mảng các chuỗi con dựa trên một chuỗi phân tách đã cho.
     * ? sort(): Sắp xếp các phần tử của mảng theo thứ tự Unicode và thay đổi mảng gốc.
     */