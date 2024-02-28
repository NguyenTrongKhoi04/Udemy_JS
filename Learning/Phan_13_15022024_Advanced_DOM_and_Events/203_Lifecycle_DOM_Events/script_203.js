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

const slider = function (){
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;// puhujcvuj cho việc lặp lại slide đầu tiên 

// TODO setting cho dễ hình dung hơn hơn
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible'
// slides.forEach((s,i) => s.style.transform = `translateX(${100*i}%)`);
                            // 0%, 100%, 200%, 300%

// TODO Create Dots button
const dotContainer = document.querySelector('.dots');
const createDots = function (){
  slides.forEach(function (_, i){
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}

// TODO Đánh dấu nút đang được nhấn 
const activateDot = function (slide){
  document  
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active'); 
}

// TODO Func Go to slide
const goToSlide = function(slide){
  slides.forEach((s,i)=> s.style.transform = `translateX(${100*(i-slide)}%)`);
}
// goToSlide(0); // tác dụng giống "slides.forEach((s,i) => s.style.transform = `translateX(${100*i}%)`)"

// TODO translate slide
const nextSlide = function (){
  if(curSlide === maxSlide-1){
    curSlide = 0; 
  }else curSlide++;// vị trí của slide hiện tại
  // console.log(curSlide);
  
  goToSlide(curSlide);
          // -100%, 0%, 100%, 200%
  activateDot(curSlide);
}
const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide -1 
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
          // -100%, 0%, 100%, 200%
   activateDot(curSlide);
}

// TODO setting mặc định
const init = function(){
  goToSlide(0);
  createDots();// mặc định nút đầu tiên sẽ được trọn
  activateDot(0);
}
init();

// TODO Next slide
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);



document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

// TODO Thực hiện chuyển slide khi nhấn nút
dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);// slide nào thì nút đó hiện sáng
  }
})

};
slider();