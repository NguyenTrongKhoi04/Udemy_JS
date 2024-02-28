'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);

// TODO 1) 
currencies.forEach(
    (value, key) => console.log(`${key}: ${value}`)
    // ! vì ko có dính đến 'this' nên mới khai báo đc kiểu này
 );

// TODO 2) 
 console.log(currenciesUnique);
 currenciesUnique.forEach(
    // function (value, key, arr){ //! Set k có index cho phần tử =>> key = value 
    // function (value, , arr){ //! ko thể bỏ trống vì dối số thứ 2 ko có gtri mặc định
    function (value, _, arr ){ //! "_" ở đây có nghĩa là ko quan trọng được phép bỏ qua
        console.log(`${value}: ${value}`);
    }
 );
        /**
         * ? "_" =>> use để sử dụng làm biến tạm thời để chỉ ra rằng gtri hoặc tham số k đc use trong phạm vi hiện tại
         * ! "_" áp dụng đối với forEach ( hiện tại theo kiến thức gà non thì tôi nghĩ là vậy, còn áp dụng vào j nữa thì k bt)
         * TODO TIPS: Hiểu đơn giản là trong forEach, bạn muốn bỏ qua 1 đối =>> use "_"
         */