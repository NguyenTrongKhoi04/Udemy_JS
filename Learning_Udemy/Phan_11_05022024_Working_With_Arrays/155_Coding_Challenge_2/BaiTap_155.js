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
 * * Sử dụng dữ liệu đã cho sẵn
Julia và Kate's đang học về loài chó. Lần này họ muốn tính tuổi trung bình của chó 
theo tuổi của người.
LAB	3
LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 3
Viết 1 hàm gọi là 'calcAverageHumanAge', nhận vào 1 danh sách tuổi của các chú 
chó ('ages'), và hãy làm theo thứ tự sau
1. Tính tuổi của chó theo tuổi của con người theo công thức sau: nếu tuổi của chó 
<= 2, tuổi của người = tuổi của chó * 2. Nếu tuổi của chó > 2, tuổi người = 16 + 
tuổi của chó * 4.
2. Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi (lấy ra tất 
cả những chú chó trên 18 tuổi)
3. Tính tuổi trung bình của các chú chó trưởng thành ra tuổi người (cộng tổng rồi chia số lượng chó)
4. Chạy hàm với các dữ liệu mẫu dưới đây:
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// TODO 1)
const calcAverageHumanAge = function (arrAgeDogs){
      const humanAges = arrAgeDogs.map(
        age => (age <= 2) ? age *= 2 : (age = 16+age*4)
      )
      console.log(humanAges);

    // TODO 2)
      const adults = humanAges.filter(value=> value>=18);
      console.log(adults);

    // TODO 3)
      const average = adults.reduce((sum,age)=> sum += age ,0)/ adults.length; // hard code
      // ? Dựa theo tính chất (2+3)/2 = 3.5 <=> 2/2 + 3/2 = 3.5
          const averageSmart = adults.reduce((sum,age,_,arr)=> sum += age/arr.length ,0)

    // ! trả lại hàm để đỡ phải console.log();      
      return averageSmart;
      
};

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
