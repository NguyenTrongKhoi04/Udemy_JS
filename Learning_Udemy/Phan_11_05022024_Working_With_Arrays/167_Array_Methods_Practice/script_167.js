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

const displayMovements = function (movements,sort = false) {
  containerMovements.innerHTML = '';

  const mov = sort ? movements.slice().sort((a,b)=>a-b) : movements;

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Tính Tổng tiền hiện có
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// load dữ liệu khách hàng (dùng cho update view sau khi lm 1 cái gì đó) 
const updateUI = function (acc){
       // Display movements
       displayMovements(acc.movements);
      
       // Display balance
       calcDisplayBalance(acc);
   
       // Display summary
       calcDisplaySummary(acc);
}

var currentAccount;// biến chứa thông tin tài khoản khi login thành công
btnLogin.addEventListener('click',function (e){
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        inputLoginPin.value = inputLoginUsername.value = '';

        inputLoginPin.blur();
        
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

        containerApp.style.opacity = 100
        
        updateUI(currentAccount);
    }
})

btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
        // số tiền muốn chuyển 
        const amount = Number(inputTransferAmount.value);

        // username tk đc chuyển đến 
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

        // xóa value input sau khi submit chuyển
        inputTransferAmount.value = inputTransferTo.value = '';

        // xóa mặc định trỏ chuột vào thẻ input sau khi submit chuyển tiền
        inputTransferAmount.blur(); 
        inputTransferTo.blur();

        if(amount > 0 // số tiền chuyển > 0
            && receiverAcc // ktra tồn tại tk nhận tiền
            && currentAccount.balance >= amount // số tiền chuyến <= số dư tk
            && receiverAcc?.username !== currentAccount.username // validate k chuyển đc cho chính mình
        ){ 
             // Trừ tiền tài khoản, giao dịch này sẽ xuất hiện trong list giao dịch
             currentAccount.movements.push(-amount);

             // Tài khoản được chuyển đến sẽ cộng thêm tiền 
             receiverAcc.movements.push(amount);

             // load lại view
             updateUI(currentAccount);
        }
        else{alert('Xem lại tk muốn chuyển');}
});

// Vay tiền theo lãi suất
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);
  
  if(amount > 0 && currentAccount.movements.some(value => value >= amount*0.1)){
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = ''
})

// User xóa tài khoản khi ko muốn dùng nữa 
btnClose.addEventListener('click',function(e){
      e.preventDefault();

      if(inputCloseUsername.value === currentAccount.username
          && Number(inputClosePin.value)===currentAccount.pin){
            
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);

            accounts.splice(index,1); // xóa 1 phần tử bắt đầu ở vị trí của "index"
            // console.log(accounts);

            containerApp.style.opacity = 0;          
      }
      inputCloseUsername.value = inputClosePin.value = '';
})


const arr = [1,2,3,4,5,6,7];

labelBalance.addEventListener('click',function(){
    // // ! Hard code
    //   const movementUI = Array.from(querySelectorAll());   
    //   // console.log(movementUI);
    //   console.log(movementUI.map(valueStr => Number(valueStr.textContent.replace('€',' '))));

    // ! clean code
    const movementUI = Array.from(document.querySelectorAll('.movements__value'), value => Number(value.textContent.replace("€", "")));
    console.log(movementUI);

    // var canIterable = [...document.querySelectorAll('.movements__value')];
    // var canIterable1 = document.querySelectorAll('.movements__value');
})

/**
 * * Sử dụng những dữ liệu cho sẵn
 * TODO 1) Gộp tất cả "movements" của all tài khoản thành 1 arr 
 * TODO 2) Tính tổng của arr 1)
 * TODO 3) Hãy đếm arr ở 1) có bao nhiêu phần tử > 10000 
 *          ! bắt đầu đếm từ 1 
 * TODO 4) Dự đoán output "let a= 10;console.log(a++);console.log(a);"
 * TODO 5) sử dụng reduce() với giá trị bắt đầu là 1 obj {deposits: 0, withdrawals: 0}
 *          ? Nếu giá trị trong arr 1) >0 thì += vào deposits, ngược lại thì += vào withdrawals
 * TODO 6) Chuyển đổi chuỗi thành tiêu đề 
 *          ! Ví dụ: this is a nice title -> This Is a Nice Title
 *          ! 'a, an, the, but, or, on, in, with' để thường
 */

// TODO 1)
console.log(accounts.map(acc => acc.movements).flat());// hard code
console.log(accounts.flatMap(acc => acc.movements));// clean code

// TODO 2)
console.log(accounts.flatMap(acc => acc.movements).reduce((sum,cur) => sum += cur,0));

// TODO 3)
console.log(accounts.flatMap(acc => acc.movements).reduce((count,cur) => (cur >= 1000 ? ++count : count),0));

// TODO 4)
let a= 10;
console.log(a++);// in -> tăng =>> lần gọi tiếp theo sẽ nhận đc gtri tăng
console.log(a);  

// TODO 5)
    // cách 1
const sum = accounts.flatMap(acc => acc.movements)
                    .reduce((sums,cur)=> {
                                (cur>0)? sums.deposits += cur : sums.withdrawals += cur;
                                return sums;},
                                {deposits: 0, withdrawals: 0})
console.log(sum);

    // cách 2: clean code
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
    .reduce((sums,cur)=> {
                sums[(cur>0)? 'deposits' : 'withdrawals'] += cur;
                return sums;},
                {deposits: 0, withdrawals: 0})
console.log(deposits, withdrawals);

// TODO 6) 
const convertTitleCase = function (title){
  const capitzalize = str => str[0].toUpperCase() + str.slice(1)
  const exprections = ['a','an','the','but','or','on','in','with'];

  let titleCase = title.toLowerCase().split(' ').map((value,index)=>
      exprections.includes(value) ? value : capitzalize(value)
  ).join(' ');
  return titleCase;
}
console.log(convertTitleCase('this is a nice title'));