'use strict';

// TODO 1)
// rbg(255,255,255)
const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);// ? tại sao công thức random lại thế này

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

document.querySelector('.nav__link').addEventListener('click',function (e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);

  console.log(e.currentTarget === this);

  // Stop propagation =>> phần tử cha sẽ k đc nhận sự kiện click của con
  // e.stopPropagation();
})

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// * Nếu bạn để đối số thứ 3 của addEventListener() = true =>> sự kiện đc gắn vào nó sẽ được thực hiện đầu tiên 
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// },true);

// TODO 2)
/**
 * ? e.target: Nó trả về một DOM element mà người dùng click vào, còn e.currentTarget() sẽ trả về DOM element mà ta đã thêm sự kiện listener 
 * E.BUBBLING_PHASE: Khi mà thông tin sự kiện truyền xuống qua các element con của nó.
 * E.CAPTURING_PHASE: Thông tin sự kiện truyền lên tới các element cha của nó.
 * Nếu thêm vào true thì sẽ chuyển sang phase capturing.
 */

/**
 * * Tôi sẽ nói lại bài trc 1 tý 
 * ? mô hình hoạt động khi có sự kiện: 
 *      1) CAPTURING_PHASE: trình duyệt tìm từ trên xuống, trình duyệt đi qua các phần tử từ phần tử gốc của 
 *         tài liệu xuống tới phần tử gốc của sự kiện để xem xem có xử lý sự kiện nào được gán cho chúng không 
 *            ! nhìn vào ví dụ sau sẽ hiểu nhá 
 *                  <div><a>click me</a></div>
 *                 🌻 Trình duyệt đi qua div -> a -> click me 
 *                 🌻 tức là nếu khi thực hiện mà div đc gắn sự kiện =>> nhấn vào a thì cũng sẽ kích hoạt sự kiện đc đc gán vào div lun
 *      2) TARGET_PHASE: khi tìm thấy phần tử html đc gán =>> kích hoạt 
 *      3) BUBBLING_PHASE: kích hoạt các sự kiện liên quan đến phần tử html đó
 *          🌻 ví dụ ở phần 1): sau khi thực hiện sự kiện ở thẻ a =>> lúc này trình duyệt xem và phát hiện thẻ cha - div cũng có sự kiện
 *             click trình duyệt kích hoạt luôn sự kiện của div
 *              ! tui đang nói trong trường hợp thẻ a đè lên thẻ div và 2 khứa này đều có sự kiện click 
 */