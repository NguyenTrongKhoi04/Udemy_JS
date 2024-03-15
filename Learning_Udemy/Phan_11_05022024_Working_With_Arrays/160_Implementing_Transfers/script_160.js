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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
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

let currentAccount;// biến chứa thông tin tài khoản khi login thành công
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

/**
 * * Sử dụng những dữ liệu cho sẵn 
 * * Viết tiếp func trên
 * TODO 1) Xóa value input sau khi dubmit chuyển & xóa mặc đỉnh trỏ chuột
 * TODO 2) chuyển tiền 
 *          ? tài khoản nhận =>> + tiền
 *          ? tài khoản chuyển =>> - tiền
 *          ! sau khi chuyển sẽ update luôn view user (list chuyển khoản, tổng số dư, ....)
 *          ! chuyển tiền đúng tk (tk đó tồn tại)
 *          ! chuyển tiền <= số tiền dư trong tk
 * TODO 3) nhập sai tên tk muốn chuyển =>> báo lỗi
 */

btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
        // số tiền muốn chuyển 
        const amount = Number(inputTransferAmount.value);

        // username tk đc chuyển đến 
        const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

        // TODO 1)
        // xóa value input sau khi submit chuyển
        inputTransferAmount.value = inputTransferTo.value = '';

        // xóa mặc định trỏ chuột vào thẻ input sau khi submit chuyển tiền
        inputTransferAmount.blur(); 
        inputTransferTo.blur();

        // TODO 2)
        if(amount > 0 // số tiền chuyển > 0
            && receiverAcc // ktra tồn tại tk nhận tiền
            && currentAccount.balance >= amount // số tiền chuyến <= số dư tk
            && receiverAcc?.username !== currentAccount.username // validate k chuyển đc cho chính mình
                                    //! biến currentAccount được khai báo ở trên
        ){ 
             // Trừ tiền tài khoản, giao dịch này sẽ xuất hiện trong list giao dịch
             currentAccount.movements.push(-amount);

             // Tài khoản được chuyển đến sẽ cộng thêm tiền 
             receiverAcc.movements.push(amount);

             // load lại view
             updateUI(currentAccount);
        }
            // TODO 3)
        else{alert('Xem lại tk muốn chuyển');}
});
