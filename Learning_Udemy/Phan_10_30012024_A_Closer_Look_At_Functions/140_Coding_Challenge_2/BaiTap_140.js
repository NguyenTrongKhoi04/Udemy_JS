'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click',() => {
    header.style.color = 'blue';
  });
})();


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function() {
    this.style.color = 'blue'; // Sử dụng 'this' để thay đổi màu
  });
})();

/**
 * * Sủ dụng những dữ liệu đã cho sẵn
 * TODO 1) Sử dụng IIFE ở dữ liệu cho sẵn, Giờ hãy làm sao để khi nhấn vào thẻ h1 thì chữ chuyển màu "blue" 
 *          ! Không được trỏ 1 lần nữa vào thẻ h1 (querySelector,....)
 * TODO 2) Giải thích chi tiết cách hoạt động của nó
 * TODO 3) Sự khác biệt giữa "function (){}" & "() => {}" (Hint: this & ngữ cảnh)
 * TODO 4) Ví dụ rõ hơn về arrow func (để bạn hiểu hơn về this trong arrow func)
 */