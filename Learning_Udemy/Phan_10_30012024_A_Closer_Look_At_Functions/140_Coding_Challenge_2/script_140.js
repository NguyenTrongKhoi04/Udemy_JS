'use strict';

// TODO 1)
    //* Cách 1
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click',() => {
    header.style.color = 'blue';
  });
})();

    //* Cách 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function() {
    this.style.color = 'blue'; // Sử dụng 'this' để thay đổi màu
  });
})();

// TODO 2) 
    /**
     * Giải thích đơn giản là 'this' sẽ trỏ đến ngữ cảnh cụ thể đó
     *      ? ở đây ngữ cảnh là 'header'
     * ! Cách 1 tôi sẽ giải thích kỹ hơn ở dưới, lý do vì sao là 'header' chứ k phải 'this'
     */

// TODO 3) 
    /**
     * * ngữ cảnh là gì ?
     *     - Ngữ cảnh (context) : Đối tượng hoặc biến có liên quan đến sự kiện
     *     - Ngữ cảnh có thể được tạo từ 1 obj hay 1 func hoặc 1 arrow func
     *      
     * * function (){}
     *      ? 'this' trong 1 func thông thường sẽ phụ thuộc vào cách hàm đc gọi
     *          - Nếu hàm đc gọi thông qua 1 obj =>> this tham chiếu obj đó 
     *          - Nếu ko thì sẽ tham chiếu đến window (hoặc global trong NodeJS)
     *      ? trong hàm thông thường, this sẽ tham chiếu đến phần tử kích hoạt sự kiện đó 
     * * () => {}
     *      ? 'this' sẽ không tạo ra 1 ngữ cảnh mới 
     *      ? sẽ sử dụng giá trị 'this' bên ngoài gần nó nhất (thường sẽ là func gần nhất, ko phải func arrow)
     */

// TODO 4) 
const obj = {
    name: 'Object',
    regularFunction: function() {
      console.log(this); // In ra đối tượng 'obj'
      const arrowFunction = () => {
        console.log(this); // Vẫn in ra đối tượng 'obj', vì arrow function sử dụng ngữ cảnh của hàm gần nhất là 'regularFunction'
      };
      arrowFunction();
    }
  };
  
  obj.regularFunction(); // Gọi phương thức 'regularFunction'
  