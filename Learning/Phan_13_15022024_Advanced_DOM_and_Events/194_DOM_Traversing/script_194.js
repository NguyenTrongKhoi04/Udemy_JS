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

// TODO 1)
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.children);
console.log(h1.childNodes);

// TODO 2)
console.log(h1.firstElementChild);
console.log(h1.firstChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// TODO 3)
console.log(h1.parentNode);
console.log(h1.parentElement);

// TODO 4) 
// tương tác với phần tử cha gần nhất
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';// return chính nó
    //! element.closest(selector) trong đó selector là điều kiện để tìm phàn tử cha (dựa theo id, class, css,...)

// TODO 5) 
console.log(h1.nextSibling);
console.log(h1.previousSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousElementSibling);

console.log(h1.parentElement.children);// TODO TIPS: lấy toàn bộ anh chị e và cả bản thân 
[...h1.parentElement.children].forEach(function (el){
    if(el !== h1) el.style.transform = 'scale(0.5)';
});