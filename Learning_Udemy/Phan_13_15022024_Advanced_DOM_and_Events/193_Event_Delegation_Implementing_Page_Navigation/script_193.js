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

//! Bad code
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click',function (e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// })

// TODO TIPS Clean code =>> use events delegation.
    /**
     * ! Nếu như bạn gán các sự kiện vào full element =>> 1 tỷ cái element ->> lag luôn =>> phải sử dụng "event delegation" 
     * ? Hiểu đơn giản như sau: Bạn sẽ gán sự kiện vào phần tử cha chung của các element mà bạn muốn thêm sự kiện cho element con 
     * ?                          rồi khi nhấn vào phần tử con =>> capturing_phase & target_phase thẻ cha. Lúc này sự kiến đc gán vào thẻ cha kích hoạt
     * ?                          =>> gọi sự kiện đc gán ở thẻ con. Cái mấu chốt ở đây là phần điều kiện phải có dạng như "e.target"
     * ! e.target giúp ta tương tác với DUY NHẤT 1 element =>> ví dụ bạn có 1 tỷ thẻ 'li' nhưng khi nhấn nó chỉ làm vc với thẻ 'li' đc nhấn thôi
              const ulElement = document.querySelector('ul');
              
              ulElement.addEventListener('click', function(event) {
                if (event.target.tagName === 'LI') {
                  // Xử lý sự kiện cho phần tử li được click
                  console.log('Bạn đã click vào một phần tử li');
                }
              });
    Dưới đây là cách các bước tương ứng với mã trên hoạt động:

    1) Gắn sự kiện lắng nghe cho phần tử cha:
    Trong đoạn mã trên, ulElement là phần tử cha mà chúng ta muốn gắn sự kiện lắng nghe. Chúng ta sử dụng addEventListener() để gắn sự kiện 'click' cho ulElement.
                
    2) Kiểm tra phần tử gốc của sự kiện:
    Khi một sự kiện 'click' xảy ra trên ulElement hoặc một phần tử con của nó, trình duyệt sẽ bắt đầu lan truyền sự kiện này từ phần tử con đó lên đến ulElement. 
    Trong trường hợp này, sự kiện click được kích hoạt trên một phần tử con của ulElement.
                
    3) Kiểm tra điều kiện để xác định phần tử cụ thể:
    Trong hàm xử lý sự kiện của ulElement, chúng ta sử dụng event.target để xác định phần tử cụ thể mà sự kiện click đã xảy ra. Trong trường hợp này, chúng ta 
    kiểm tra xem phần tử mà sự kiện click đã xảy ra có phải là một phần tử LI hay không bằng cách kiểm tra event.target.tagName === 'LI'.
                
    4) Xử lý sự kiện:
    Nếu phần tử mà sự kiện click đã xảy ra là một phần tử LI, chúng ta thực hiện các hành động xử lý sự kiện mong muốn. Trong trường hợp này, chúng ta log một 
    thông điệp ra console để xác nhận rằng một phần tử LI đã được click.         

    * ! kể cả bạn có 1 tỷ thẻ li nhưng click vào li nào thì lm vc với li đó =>> tránh badcode (load trang là gán full sự kiện cho 1 tỷ 'li')
     */
document.querySelector('.nav__links').addEventListener('click',function (e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){ // e.target =>. phần tử con đang đc tương tác
    const id = e.target.getAttribute('href');// nếu thay 'this' = 'e.target' =>> lấy nguyên khối code chứa cả cha và con
    // console.log(id);
    // console.log(e.target);// giúp ta làm vc với chỉ duy nhất 1 element

    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})