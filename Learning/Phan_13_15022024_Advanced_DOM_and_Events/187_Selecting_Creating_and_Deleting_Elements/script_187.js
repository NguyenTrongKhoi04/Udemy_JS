'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// * clean code
btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

// ! hard code
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// TODO 1)
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// TODO 2)
const allSections= document.querySelectorAll('.section');
console.log(allSections);// vì xóa = F12 nên biến vẫn lưu trữ 
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);// xóa =>> sẽ được cập nhật trc khi in ra

/**
 * ? NodeList tự động cập nhật khi bạn xóa chúng bằng js, nếu xóa html bằng F12 =>> ko tự động cập nhật
 */

// TODO 3)
console.log(document.getElementsByClassName);//output: 

// TODO 4) 
    // ? Tạo phần tử mới 
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';// Bad code
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
    // ? Thêm phần tử đó vào header
const header = document.querySelector('.header');
header.prepend(message);

// TODO 5) 
// header.prepend(message);// cho lên đầu danh sách thẻ con của khối header
// header.append(message);// cho vào cuối danh sách thẻ con của khối header
// header.append(message.cloneNode());
// header.append(message.cloneNode(true));// sao chép toàn bộ (cả con)

// TODO 6)
// header.before(message);
// header.after(message);

// TODO 7) 
document.querySelector('.btn--close-cookie').addEventListener('click', function (){
  // message.remove();// cách 1: cleacn code
  message.parentElement.removeChild(message);//  cách 2: remove from parent =>> bài sau sẽ đc học
})
