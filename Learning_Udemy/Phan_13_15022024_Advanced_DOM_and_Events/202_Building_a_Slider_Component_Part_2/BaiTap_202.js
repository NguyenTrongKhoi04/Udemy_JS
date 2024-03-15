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

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;// phục vụ cho thông số giao thoa

const stickyNav = function (entries){
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky');
      // isIntersecting kiểm tra giao thao phần tử với viewport
      else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver
                              (stickyNav,{
                                root: null,
                                threshold: 0,// phần tử tiếp súc với viewprot =>> sẽ gọi callback
                                rootMargin: `-${navHeight}px`,// trong trường hợp này là -90px 
                              });
                            
headerObserver.observe(header);// thực hiện quá trình theo dõi

const allSections = document.querySelectorAll('.section');

const imgTargets = document.querySelectorAll('img[data-src]');

/**
 * * Sử dụng những dữ liệu cho sẵn 
 * TODO: Tiếp tục phần 201, ở phần này ta sẽ tạo các nút button bên dưới các slide, 
 *          ! nhấn button nào thì chuyển đến slide đó
 *          ! button được nhấn sẽ đổi màu so với các button còn lại
 */