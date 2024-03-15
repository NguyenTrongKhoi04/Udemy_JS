'use strict';

/**
 * =============================================================================
 *                          Giới Thiệu về Bankist App
 * =============================================================================
 * 
 * https://bankist.netlify.app/  - Website của Bankist ở chương trình đang đọc =>> đây là kết quả sau khi bạn học xong phần 11 này 
 * Login => User: js, PIN: 1111 
 * 
 * TODO Hướng dẫn: Sử dụng web BankistApp
 *      ? 1) Request loan (vay): sau khi nhập và submit, dữ liệu vay sẽ xuất hiện phía cột trái
 *               ? Nút 'sort' trong thanh footer ở dưới cùng dùng để sắp xếp 
 * 
 *      ? 2) Transfer money (chuyển tiền cho tài khoản khác )
 *               ? nhập "amount: 5000" và "Transfer to: jd" -> submit
 *               ? Sau đó login sang tài khoản "jd" xem nhận được chưa => Login -> User: jd, PIN: 2222
 */

/**
 * TODO Hướng dẫn: Mô tả dữ liệu cho sẵn 
 *      ? Như data ở dưới đây thì các tài khoản ở dạng obj (vì API sau này return dữ liệu theo kiểu JSON Object)
 *      ? có arr "accounts" gồm các acc làm việc (đây là kiểu cấu trúc thường gặp trong JS)
 *      ? dữ liệu đang được tối giản hóa để chúng ta hiểu nó dễ hơn khi làm việc 
 */
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
