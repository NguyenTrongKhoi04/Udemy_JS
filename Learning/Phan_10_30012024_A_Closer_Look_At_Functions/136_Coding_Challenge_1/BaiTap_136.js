'use strict';

/* //* Đề nguyên văn Tiếng anh
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
  This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),    
}
/**
 * * Sử dụng những dữ liệu cho sẵn 
 * TODO 1) Viết func "registerNewAnswer()" trong obj 'poll', khi func đc gọi ra sẽ thực hiện các chức năng sau: 
 *          ? hiển thị câu hỏi và câu trả lời dạng như sau
                What is your favourite programming language?
                    0: JavaScript
                    1: Python
                    2: Rust
                    3: C++
                    (Write option number) -> user choose
 *          ? dựa vào câu trả lời =>> cập nhật giá trị của mảng
                    Ex: user chọn đáp án 1 -> tăng giá trị TẠI VỊ TRÍ SỐ 1 lên 1 đơn vị (++) 
                            -> console.log(); =>>output:  [1,0,0,0]
                            -> user tiếp tục chọn 1 =>>output: [2,0,0,0]
                            -> user tiếp tục chọn và lần này chọn đáp án 3 =>output: [2,0,0,1] 
 *                  ! Lưu ý Kiểm tra xem đâu vào có phải số k và nó có trong mảng đáp án không
 */

/**
 * TODO 2) Gọi method vừa tạo ở phần 1 khi nhấn vào nút "Answer poll" ở giao diện user. 
 * TODO 3) Tạo method "displayResults()" trong obj 'poll' để hiển thị dữ liệu người dùng nhập vào 
 *          ! Khai báo ở sau method registerNewAnswer() và ở trong obj 'poll'
 *          ? func displayResults(type = 'array') -> mặc định value đối số là arr
 *              Sau khi gọi func ở phần  2) -> user nhập đáp án -> func "displayResults()" xử lú =>> output: Poll results are 1,0,0,0 (ví dụ user nhập vào số 1)
 *                  ! ở đây bạn sẽ kiểm tra 'type = string' chứ bạn ko thể dùng đối số mặc đinh 'type = array' trên kia được
 *          ? xem thêm ví dụ ở phần 5) 
 * TODO 4) Tiếp tục với funct phần 3) nhưng chúng ta nâng cấp lên. Bạn gọi riêng lẻ hàm này ra ngoài, gọi bằng code 
 *          ? Nếu đối số type được truyền vào là array (type = array) =>> in ra mảng đó
 *          !  Vấn đề lớn nhất ở đây là func displayResults() mặc định trỏ vào  property của obj 'poll' - answers
 *              ! bạn sẽ phải làm cách nào để nó thao tác với mảng mình tự đưa vào
 *          ? xem thêm ví dụ ở phần 5)
 * TODO 5) Ví dụ chưc năng của func "displayResults()"
 *          Ex1: user nhấn button -> nhập số 0 => ouput: Poll results are 1,0,0,0
 *               -> user lạp lại thao tác trên nhưng chọn số 3 => output: Poll results are 1,0,0,1
 *               -> user lặp lại thao tác và chọn số 0 => output; Poll results are 2,0,0,1
 *          Ex2: poll.displayResults.call({ answers: [1, 5, 3, 9, 5] }, 'string'); => output: Poll results are 1, 5, 3, 9, 5
 *          Ex2: poll.displayResults.call({ answers: [1, 5, 3, 9, 5] }); => output: [1, 5, 3, 9, 5]
 *             ? tự tìm hiểu "call" có tác dụng gì nhé, nó sẽ giúp bạn giải quyết vấn đề ở phần 4) 
 */