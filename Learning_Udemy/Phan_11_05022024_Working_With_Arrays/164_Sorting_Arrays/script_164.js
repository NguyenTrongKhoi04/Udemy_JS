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

const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
/**
 * * sử sụng dữ liệu cho sẵn
 * TODO 1) Dự đoán output 
 *          ? console.log(owner.sort());
 *          ? console.log(movements.sort()); =>> theo bạn method "sort()" có ảnh hưởng đến arr gốc không 
 * TODO 2) Sắp xếp arr movements theo tăng dần và giảm dần (Ascending & Descending)
 * TODO 3) Chỉnh sửa hàm displayMovements và viết thêm func cho nút "sort"
 *        ! nếu nhần lần 1 =>> sắp xếp theo thứ tự tăng dần, nhần thêm lần nữa =>> trả về vị trí ban đầu
 */

// TODO 1)
console.log(owner.sort());

console.log(movements);
console.log(movements.sort()); //! vì sắp xếp theo ký tự (A-Z) =>> sẽ lấy chữ đầu tiên ra làm tiêu chuẩn
console.log(movements); // ảnh hưởng đến mảng gốc =>> khắc phục: movements.slice().sort()
      /**
       * ? quy ước của sort()
       * return < 0 =>> A-Z,
       * return > 0 =>> Z-A
       * TODO TIPS: Luôn nhớ mũi nhọn chỉ vào A, ">" là tăng dần còn "<" là giảm dần
       * TODO TIPS: a-b =>> tăng dần; b-a =>> giảm dần
       * ! sort so sánh chỉ chuỗi (A-Z) hoặc số (1-...). Nếu kết hợp 2 cái đó =>> ko có tác dụng 
       */

// TODO 2) 
// Ascending
movements.sort((a,b)=>{
  if(a>b) return 1; 
  if(a<b) return -1;
});
console.log(movements);

// Descending
movements.sort((a,b)=>{
  if(a>b) return -1;
  if(a<b) return 1;
});
console.log(movements);

// clean code 
movements.sort((a,b) => a-b);// Nếu a-b<0 =>> giảm dần 
movements.sort((a,b) => b-a);

// TODO 3)
// ? function displayMovements thêm đối số (sort = false), nói chung lướt lên trên là thấy
let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();

    // sắp xếp khi nhấn button "sort"
    displayMovements(currentAccount.movements, !sorted);

    // Lần sau nhắn thì sẽ trả lại mặc định arr nhu cũ
    sorted = !sorted
});