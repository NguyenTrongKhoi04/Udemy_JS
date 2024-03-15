'use strict';

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// TODO Smooth Scroll

  const btnScrollTo = document.querySelector('.btn--scroll-to');// button chứa sự kiện scroll
  const section1 = document.querySelector('#section--1');// khối section scroll đến

  btnScrollTo.addEventListener('click',function(e){

    /**
     * trong html, hệ toạn đố dẽ là 0 - x
     *                              |
     *                              Y
     * ! ko có chiều âm đâu nhá 😇
     */

    const s1coords = section1.getBoundingClientRect();// xác định khối muốn scroll đến
                              //! liên quan đến cửa sổ trình duyệt =>> cực kỳ để ý điều này
    console.log(s1coords);
    
    console.log(e.target.getBoundingClientRect());// xạc định vị trí button để bắt đầu cuộn

    console.log('Current scroll (X/Y)',window.pageXOffset,window.pageYOffset);
            /**
             * Độ cuộn màn hình theo chiều rộng và cao (x,y)
             * ? Giờ hãy thử kéo màn hình theo chiều dọc xuống 1 tý rồi nhấn button =>> thông số in ra sẽ thay đổi
             */
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );

    // Scrolling
    // scrollTo(s1coords.left,s1coords.top);// value start - value end
          /**
           * ! kéo cửa sổ trình duyệt xuống 1 tý rồi nhấn button =>> bị lỗi vì getBoundingClientRect của s1coords phụ thuộc vào màn hình trình duyệt
           * ! animation k đc mượt cho lắm
           */
    
    // TODO fix kéo cửa sổ nhấn button k đc nữa
      // ? Vì method getBoundingClientRect() phụ thuộc vào cửa sổ màn hình =>> khi kéo xuongs thì ảnh hưởng đến tọa độ X, Y
      // ? hệ tọa đồ tôi đã lưu ý ở trên rồi
    // scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset,
    //   );

    // TODO fix animation mượt
        // cách 1: 
    // scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

      // cách 2
    // section1.scrollIntoView({behavior:'smooth'}); //! áp dụng với các trình duyệt siêu hiện đại 😎
  })