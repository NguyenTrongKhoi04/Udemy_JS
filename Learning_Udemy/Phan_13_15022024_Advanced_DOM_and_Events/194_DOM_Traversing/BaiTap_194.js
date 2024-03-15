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

const h1 = document.querySelector('h1');

/**
 * *Sử dụng những dữ liệu cho sẵn
 * TODO 1) in ra những phần tử con và những Node đc use (text,cmt,...) có trong thẻ h1 trên
 * TODO 2) Thay đổi màu cho phần tử đầu tiền và cuối cùng trong thẻ h1 
 * TODO 3) dự đoán output "console.log(h1.parentNode); console.log(h1.parentElement);"
 * TODO 4) dùng closest để thay đổi màu 
 *          ? thẻ .header
 *          ? chính h1
 * TODO 5) ".style.transform = 'scale(0.5)'" những anh chị e cùng cấp với thẻ h1
 *        ! trong 1 div
 */