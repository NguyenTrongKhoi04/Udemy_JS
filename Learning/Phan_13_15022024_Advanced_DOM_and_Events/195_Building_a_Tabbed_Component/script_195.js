'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// TODO Tabbed Component

tabsContainer.addEventListener('click', function (e){
    const clicked = e.target.closest('.operations__tab'); // lấy phẩn tử cha - nút button khi click vào
        // ? Hiểu nôm na là lấy phần tử đang tương tác
    // console.log(e.target);
    // console.log(clicked);

    if(!clicked) return; // Xử lý bug khi user nhấn vào chỗ trống của phần tử cha

    // TODO Remove active classes
    tabs.forEach(tab=>tab.classList.remove('operations__tab--active'));// all button hạ xuống
    tabsContent.forEach(cont => cont.classList.remove( 'operations__content--active') ) ;// content hidden

    // TODO Activate tab
    clicked.classList.add('operations__tab--active');// cho button dịch lên trên khi click

    // TODO Activate content area 
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
                .classList.add('operations__content--active');// hiện thị content theo data-tab của button
});