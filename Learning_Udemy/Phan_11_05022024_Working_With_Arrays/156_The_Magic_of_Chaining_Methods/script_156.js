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
      console.log(movements);// 1 mảng tiền

      // TODO 1)
      const incomes = movements.filter(item => item>0)
                      .reduce((acc,value)=> acc += value,0);
      labelSumIn.textContent = `${incomes}€`;// hiển thị html

      // TODO 2)
      const out = movements.filter(item => item<0)
                  .reduce((acc,value)=> acc += value,0);
      labelSumOut.textContent = `${Math.abs(out)}€`;

      // TODO 3)
      const interest = movements.filter(item => item>0)
                       .map(value => value *1.2/100)
                       .filter(value => value >=1)
                       .reduce((acc,value)=> acc += value,0);
      labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);