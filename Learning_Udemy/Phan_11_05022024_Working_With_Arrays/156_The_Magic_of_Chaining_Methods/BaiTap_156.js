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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

containerApp.style.opacity = '100%';
containerMovements.innerHTML = '';
const displayMovements = function (movements){
  movements.forEach(
        function (value, index) {   
            let type = (value > 0) ? 'deposit' : 'withdrawal' ; 
            const html =`<div class="movements__row">
                    <div div class="movements__type movements__type--${type}">${index+1} ${type}</div>
                    <div class="movements__value">${value}€</div>
                    </div>`;
            // Hiển thị ra HTML
               containerMovements.insertAdjacentHTML('afterbegin',html);// containerMovements đc khai báo ở phía trên
        }
  );
};
displayMovements(account1.movements);

const calcDisplaySummary = function(movements){
   
};
calcDisplaySummary(account1.movements);
/**
 * * Sử dụng những dữ liệu đã cho sẵn
 * * Lưu ý bài này hãy use chuỗi method =>> a.method1().method2()
 * * Viết tiếp function calcDisplaySummary() và nó sẽ chứa tất cả các func bài tập ở dưới
 * TODO 1) Viết tiếp func để tính tổng tiền nạp và hiển thị nó ở chỗ "in" trong phần giao diện  
 *          ! chữ "in" ở dưới dùng của danh sách lịch sử thanh toán
 *          ! HINT: use thẻ html "labelSumIn"
 * TODO 2) Tương tự 1) nhưng tỉnh tổng tiền rút ở "out"
 *          ! ko được hiển thị số âm =>> dùng hàm abs()
 *          ! HINT: use thẻ html "labelSumOut"
 * TODO 3) Tính lại suất, mỗi lần nạp là được cộng 1,2% số tiền nạp đó, chỉ tính lại suất trên 1.0
 *          ! HINT: sau khi tính ra lãi suất lần nạp tiền đó, nếu >= 1.0 thì hãy cho nó vào arr để tính tổng
 *          ! HINT use thẻ html "labelSumInterest"
 */

