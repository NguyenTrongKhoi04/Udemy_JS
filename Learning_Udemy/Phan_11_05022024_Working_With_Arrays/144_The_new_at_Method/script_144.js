'use strict';

const arr = [23,11,64];

// TODO 1) 
console.log(arr[arr.length -1]);

console.log(arr.slice(-1));
console.log(arr.slice(-1)[0]); // phải có '[0]' vì slice return 1 arr

// TODO 2) 
console.log(arr.at(-1));
    /**
     * ? 'at' có hoạt động giống với slice nhưng nó ko return về 1 mảng, nó return phần tử 
     * ? Nếu dùng 2 cách ở phần 1) thì bạn không thể nối tiếp '.method' được 
     * TODO TIPS: 'at()' giúp ta lấy phần tử của arr mà vẫn có thể "array method"
     */
console.log(arr.at(0));// ví dụ thêm vể 'at' 
