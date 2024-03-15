'use strict';

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/**
 * * Sử dụng dữ liệu cho sẵn ở trên
 * TODO 1) Thay đổi style khối message trên (màu: #37383d, width: 120%)
 * TODO 2) in ra những thuộc tính "color,backgroundColor" của message
 * TODO 3) In ra 
 *          ? tất cả style của thẻ message
 *          ? màu của message
 *          ? chiều cao của message
 * TODO 4) Thêm 100px vào chiều cao của message
 * TODO 5) set biến style "--color-primary" của file css có thuộc tính mới là "orangered"
 * TODO 6) thao tác với ảnh ".nav__logo"
 *          ? in ra alt của ảnh 
 *          ? in ra src ảnh
 *          ? in ra class ảnh
 *          ? Đổi alt mới cho ảnh "Beautiful minimalist logo"
 *          ? vì sao lại ko đc =>> console.log(logo.designer); =>> Giải quyết như thế nào 
 *          ? set thêm attribute nữa cho ảnh "company" có giá trị "Bankist"
 * TODO 7) Cách lấy
 *          ? link tương đối của ảnh 
 *          ? link tuyệt đối của ảnh
 *          ? link tuyệt đối của ".nav__link--btn"
 *          ? link tương đối của ".nav__link--btn"
 * TODO 8) cách láy thuộc tính tự thêm vào "data-version-number"
 * TODO 9) kể tên những thuộc tính cơ bản của classList
 * TODO 10) có nên dùng className để chỉnh sửa class cho phần tử không? vì sao?
 */