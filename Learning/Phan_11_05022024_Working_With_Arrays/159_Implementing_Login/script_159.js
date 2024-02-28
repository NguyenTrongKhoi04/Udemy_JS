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
const calcDisplayBalance = function (movement) {
 const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////
// let a ={
//   khoi: 4
// }
// if(b?.khoi===4){
//   console.log('khoi');
// }
////
/**
 * * Sử dụng những dữ liệu cho sẵn trên 
 * TODO * Giờ bạn đang làm chức năng đănh nhập (dựa trên các bước sau đây)
 * TODO 1) khi login thì ngăn submit form mặc đinh của trình duyệt
 * TODO 2) Nếu nhập username đúng =>> infor tk đó được cho vào biến "currentAccount" 
 * TODO 3) Kiểm tra xem tồn tại tk đó k 
 *          ? HINT: nếu phần 2) trả ra "underfined" =>> ko thực hiện check password và ngc lại
 * TODO 4) Xóa dữ liệu của 2 thẻ input "inputLoginPin" & "inputLoginUsername" sau khi thực hiện login
 * TODO 5) Xóa vị trí con trỏ chuột ở thẻ input "inputLoginPin"
 *          ? HINT: phần 4), sau khi xóa thì con trỏ sẽ đứng ở ô input "inputLoginPin" =>> xóa nó đi sau khi thực hiện phần 4)
 * TODO 6) Hiển thị "Welcome back, ..tên.." ở góc trái 
 * TODO 7) hiển thị các thông tin tài khoàn (list giao dịch, tổng tiền, tổng số tiền chuyển đi/nhận được)
 * ! Nếu login đúng =>> welcome, từ đầu tiên của acc (split(' ')[0]) 
 * ! Mỗi tài khoản có 1 lãi suất riêng
 */

let currentAccount;// biến chứa thông tin tài khoản khi login thành công

btnLogin.addEventListener('click',function (e){
    // TODO 1) ngăn form submit của trình duyệt
    e.preventDefault();
    // console.log(3);

    // TODO 2) return ra tk khi nhập đúng username
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    // TODO 3) check acc tồn tại
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        // TODO 4) xóa value thẻ input khi login được
        inputLoginPin.value = inputLoginUsername.value = '';

        // TODO 5) Xóa chuột ko còn trỏ ở thẻ input pin
        inputLoginPin.blur();
        
        // TODO 6) Display UI and message Welcome
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

        // TODO 7) Hiển thị thông tin tài khaonr 
        containerApp.style.opacity = 100
        
          // Display movements
          displayMovements(currentAccount.movements);
      
          // Display balance
          calcDisplayBalance(currentAccount.movements);
      
          // Display summary
          calcDisplaySummary(currentAccount);
    }
})