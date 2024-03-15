'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;

    // console.log(this); =>> this là giá trị được bind quy định truyền vào
  }
};

nav.addEventListener('mouseover',handleHover.bind(0.5));

//* muốn biết tác dụng của khối mouseout =>> bỏ khối mouseout dưới đây đi
nav.addEventListener('mouseout',handleHover.bind(1));

//! Mouseenter: Sự kiện này không lan rộng sang các phần tử con bên trong phần tử mà nó đang giám sát, ngược lại với mouseover

/**
 * TODO Cách dễ hiểu hơn nhưng hơi dài
 */
      // const handleHover = function (e,opacity) {
      //   if (e.target.classList.contains('nav__link')) {
      //     const link = e.target;
      //     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      //     const logo = link.closest('.nav').querySelector('img');

      //     siblings.forEach(el => {
      //       if (el !== link) el.style.opacity = opacity;
      //     });
      //     logo.style.opacity = opacity;
      //   }
      // };

      // nav.addEventListener('mouseover',function (e){
      //   handleHover(e, 0.5);
      // });
      // nav.addEventListener('mouseout',function (e) {
      //   handleHover(e, 1);
      // });