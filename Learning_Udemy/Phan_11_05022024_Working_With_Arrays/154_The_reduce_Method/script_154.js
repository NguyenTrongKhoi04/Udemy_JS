'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// TODO 1) 
let balance0 = movements.reduce(
  function (tong, value, index, arr){
    // console.log(`Iteration ${index}: ${value}`);// mở ra sẽ thấy vòng hoạt động
      return tong+value;
  }, 
  0 //value_start
);
console.log(balance0);

let balance = movements.reduce((acc, curValue) => acc + curValue, 0);
console.log(balance);

// TODO 2) 
let sumFor=0;
for (const item of movements) sumFor += item;
console.log(sumFor);

// TODO 3)
const calcDisplayBalance = function (movements){
  let sum = movements.reduce((acc, curValue) => acc + curValue, 0);
  labelBalance.textContent = `${sum} EUR`;
}
calcDisplayBalance(account1.movements);

// TODO 4)
let max = movements.reduce(
(acc, value) => {
   return (acc>value)? acc : value;
},
movements[0] 
  //! trong trường hợp này để cho số 0 vào vẫn đúng
  // * khuyến cáo nên cho phần tử đầu tiên 
  // ? ví dụ mảng đó toàn số âm =>> cho giá trị 0 =>> sai  
);
console.log(max);

// TODO 5) 
  /**
   * ! nếu map(), filter() return 1 arr thì reduce() return 1 giá trị. Ngta hay gọi nó là Snowball 
   * * reduce có 4 đối số .reduce( function(accumulator, currentValue, index, array){return....}, value_start)
   *    ? accumulator : giá trị hiện tại của giá trị đang duyệt =>> nơi lưu trữ tính toán
   *    ? currentValue : giá trị hiện tại của phần tử đang duyệt
   */