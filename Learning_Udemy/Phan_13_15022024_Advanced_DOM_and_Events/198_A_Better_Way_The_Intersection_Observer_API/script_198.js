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

// TODO The Intersection Observer API
/**
 * ! Vì bài này rất khó nên phải ngồi nhai cực kỹ
 * * Trước tiên bạn vần hiểu khái niệm quan sát giao thoa giữa 2 obj - The Intersection Observer API
 * ? Intersection Observer API là 1 API giúp ta theo dõi việc tương tác phần tử với viewport
 *    =>> kiểm tra xem phần tử đã đc nhập vào viewport hay chưa?
 *    =>> từ đó có thể có thêm các sự kiện khi xử lý nếu 2 đối tượng GIAO NHAU
 * 
 * ? Hoạt động gôm 3 phần
      1) Quan sát: Bạn có thể tạo một đối tượng Intersection Observer và chỉ định 
          một hàm callback. Trình duyệt sẽ quan sát các phần tử mà bạn quan tâm.

      2) Phản hồi: Mỗi khi một phần tử mà bạn quan sát thay đổi sự tương tác với 
          viewport (ví dụ: nó vào hoặc ra khỏi viewport), hàm callback sẽ được gọi.

      3) Thông tin Intersection: Callback sẽ cung cấp cho bạn thông tin về mức độ 
          giao thoa giữa phần tử và viewport. Bạn có thể biết được phần trăm phần tử 
          nằm trong viewport, hoặc xác định xem phần tử đã hoàn toàn xuất hiện trong viewport hay chưa.
 */
const obsCallback = function (entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],// ngưỡng 0% hoặc 20%
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
      /**
       Dưới đây là giải thích chi tiết về từng phần của đoạn mã:

          1) const obsCallback = function (entries, observer) { ... }:
            🍕Đây là một hàm callback được sử dụng để xử lý các sự kiện khi các phần tử được quan sát thay đổi tương tác với viewport.
            🍕Tham số entries: Một mảng chứa danh sách các đối tượng IntersectionObserverEntry, mỗi đối tượng đại diện cho một phần tử được quan sát.
            🍕Tham số observer: Đối tượng IntersectionObserver mà hàm callback này được liên kết với.

          2) const obsOptions = { root: null, threshold: [0, 0.2] };:
            🍕obsOptions là một đối tượng chứa các tùy chọn cho Intersection Observer.
            🍕root: Xác định phần tử gốc mà phần tử được quan sát sẽ được so sánh với. Giá trị null có nghĩa là sử dụng viewport làm phần tử gốc.
            🍕threshold: Một mảng chứa các ngưỡng (thresholds) để định nghĩa khi nào một phần tử được xem là giao thoa với viewport. Trong trường hợp này, nếu 0% hoặc ít nhất 20% của phần tử nằm trong viewport, hàm callback sẽ được gọi.

          3) const observer = new IntersectionObserver(obsCallback, obsOptions);:
            🍕Đây là cách tạo một đối tượng Intersection Observer mới.
            🍕Tham số đầu tiên là hàm callback được gọi mỗi khi có sự kiện giao thoa xảy ra.
            🍕Tham số thứ hai là các tùy chọn mà chúng ta đã định nghĩa trong obsOptions.

          4) observer.observe(section1);:
            🍕Đoạn này kích hoạt việc theo dõi sự tương tác giữa section1 và viewport bằng cách gọi phương thức observe() của đối tượng observer.
            🍕Khi section1 được quan sát và thỏa mãn các điều kiện đã định nghĩa trong obsOptions, hàm callback obsCallback sẽ được gọi và các thông tin về phần tử sẽ được hiển thị trong console.
       * TODO: Khối trên tác dụng như sau =>> khi bạn scroll đi qua ngưỡng giao thoa (0% or 20%) -> console.log(); thông tin phần tử section1 
       * ! hàm callback khi đc gọi k cần điền đối số cho nó vì "IntersectionObserver" sẽ tự động diền 
       */

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
       /**
        * ? Nôm na khối code trên hoạt động như sau
        *      khi bạn scroll xuống mà viewport chạm vào rootMargin của '.header' =>> sẽ hiện thanh nav lên
        */    