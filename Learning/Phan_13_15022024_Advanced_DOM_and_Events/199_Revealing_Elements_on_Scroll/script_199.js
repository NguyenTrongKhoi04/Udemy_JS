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
console.log(navHeight);

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

// TODO setup callback
const revealSection = function(entries, observer){
  const [entry] = entries;// tạo biến để tương tác với phần tử đc theo dõi
  console.log(entry);
  // console.log(typeof entries);

  // xử lý khi ch trong viewpport
  if(!entry.isIntersecting) return;// khi ch giao thoa =>> ko có vc gì xảy ra
  
  // Hiển thị
  entry.target.classList.remove('section--hidden');//entry.target =>> làm vc với phần tử đc theo dõi

  // thử đi bro, nó rất thú vị
  // observer.unobserve(entry.target);// loại bỏ lấy dữ liệu của phần tử đó khi đã được hiển thị
      // ? sau khi scroll xuongs một section thì section đó sẽ hiển thị mãi mãi =>>  nôm na là ngừng theo dõi
};

// TODO setup callback đc gọi và info giới hạn khi giao thoa
const sectionObserver = new IntersectionObserver
(revealSection,{
    root: null,// lấy toàn bộ viewport để làm khung mẫu 
    threshold: 0.15,
  }
);

// TODO Gán sự kiện vào mỗi section và ẩn section đó đi
allSections.forEach((section)=>{
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});