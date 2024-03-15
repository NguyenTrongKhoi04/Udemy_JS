'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/**
 * * sử dụng những dữ liệu trên
 * TODO Giờ tôi muốn fixed nav khi scroll hết section 1
 */

// TODO 
//* Vì trong style đã fixed cho class '.sticky' =>> chúng ta gán vào là đc 

let initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
// section1.style.backgroundColor = 'red';

window.addEventListener('scroll',function(e) {
  // console.log(e);
  // console.log(window.scrollY);

  // Sau khi kết thúc section 1 =>> fixed cho sticky header
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
      //? Dịch điều kiện như sau: Nếu cạnh trên của sổ màn hình đi qua cạnh trên của section1
    else nav.classList.remove('sticky');
}); 

/**
 * ! Trên máy tính thì oke ổn nhưng thử dùng điện thoại thì hơi xấu
 * ! những thông số của hàm getBoundingClientRect()
      x: Tọa độ ngang (horizontal) của góc trái của phần tử tính từ cạnh bên trái của viewport.

      y: Tọa độ dọc (vertical) của góc trên của phần tử tính từ cạnh trên của viewport.

      width: Chiều rộng của phần tử.

      height: Chiều cao của phần tử.

      top: Khoảng cách từ cạnh trên của viewport đến cạnh trên của phần tử.
          viewport là cạnh trên của của sổ trình duyệt

      right: Khoảng cách từ cạnh phải của viewport đến cạnh phải của phần tử.

      bottom: Khoảng cách từ cạnh dưới của viewport đến cạnh dưới của phần tử.

      left: Khoảng cách từ cạnh trái của viewport đến cạnh trái của phần tử.
 */   
