'use strict';


const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
    /**
     * ? Vì không có this trong func addTax =>> null
     * ? null để chỉ định giá trị của this =>> trg trường hợp này là bỏ qua gtri của this 
     */

const addTaxRate = (rate,value) => {
  return function () {
    return value+value*rate;
  }
};

const addVAT_RATE = (value)=>{
  return addTax(0.23,value);
} ;

console.log(addVAT_RATE(100));
