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

// TODO 1) 
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// TODO 2)
console.log(message.style.color);
console.log(message.style.backgroundColor);

// TODO 3)
console.log(getComputedStyle(message));// get all style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);// responsive design

// TODO 4)
// message.style.height = getComputedStyle(message) + 40 + 'px';// not working
message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 100 + 'px';
console.log(message.style.height);

// TODO 5) 
document.documentElement.style.setProperty('--color-primary', 'orangered');

// TODO 6)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

console.log(logo.designer);// vì designer là thuộc tính tự mình thêm vào =>> underfined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');// create new attribute

// TODO 7)
console.log(logo.src);
console.log(logo.getAttribute('src'));// get URL relative

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// TODO 8)
console.log(logo.dataset.versionNumber);
    /**
     * Lưu ý khi gọi =>> viết theo camelCase
     */

// TODO 9)
logo.classList.add('c','j')
logo.classList.remove('c','j')
logo.classList.toggle('c')// nếu tồn tại c =>> xóa, nếu chưa =>> thêm vòa
logo.classList.contains('c')// check nếu có =>> true và ngược lại

// TODO 10) 
logo.className = 'jonas';//! Bad code =>> ko nên use vì nó sẽ ghi đè lên toàn bộ classList
                        // * TIPS: Bạn nên sử dụng classList.add/remove để thêm/xóa class