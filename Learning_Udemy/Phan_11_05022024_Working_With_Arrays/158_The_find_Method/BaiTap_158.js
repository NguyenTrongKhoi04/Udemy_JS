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

/**
 * * Sử dụng dữ liệu cho sẵn 
 * TODO 1) Dùng "find" để tìm kiếm số âm trong arr "movements"
 * TODO 2) Từ 1) =>> kết luận về "find()"
 * TODO 3) tìm kiếm trong arr "accounts" và in ra thông tin tài khoản có owner = "Jessica Davis"
 * TODO 4) dùng "forof" để làm 3)
 */

// TODO 1)
const firstWidthrawal = movements.find(movement => movement < 0);
console.log(firstWidthrawal);

// TODO 2) 
      /**
       * * method "find()" giống như  hàm "filter()", chúng ta cũng có thể dùng phương thức này để lọc mảng 
       * * Nó chỉ lấy giá trị được trả lại "True" được trả lại bởi callback-func/arrow-func
       * ! nó sẽ dừng lại khi func trả lại true =>> tức là tìm thấy phần tử arr thỏa mãn điều kiện
       * ? các đối số của nó là (value, index, arr)=>{...}
       * TODO: ứng dụng trong login
       */

// TODO 3)
const account = accounts.find(acc => acc.owner==="Jessica Davis");
console.log(account);

// TODO 4)
function findAcc(arrAccounts){
  for (let acc of arrAccounts){
    if(acc.owner === 'Jessica Davis'){
      return console.log(acc);;
    }
}
}
findAcc(accounts);