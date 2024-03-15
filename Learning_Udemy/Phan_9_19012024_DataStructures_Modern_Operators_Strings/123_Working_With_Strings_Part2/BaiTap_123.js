const airline = 'TAP Air Portugal';
const passenger = 'jOnAS';
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const price  = '456,343 $';
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
const plane = 'A320neo';

/**
 * * Sử dụng những dũ liệu trên
 * TODO 1) In UpperCase và LowerCase chuỗi 'airline'
 * TODO 2) Từ biến 'passenger', hãy in ra "Jonas"
 * 
 * TODO 3) Loại bỏ những khoảng trắng và ký tự xuống dòng của loginEmail
 * TODO 4) yêu cầu của câu 3) + lower 
 *          ?=> ouput: hello@jonas.io
 *          ! Chỉ được code 1 dòng duy nhất để in ra
 *          ? Có thể thực hiện nhiều phương thức trong 1 câu lệnh đc k
 * TODO 5) Từ biến 'price', hãy in ra: "456.343 VNĐ"
 * TODO 6) thay thế toàn bộ 'door' -> 'gate' của biến 'announcement'
 *          ! Hàm replace có thay thế được hết k? Có cách nào để thay thế hết k
 * 
 * TODO 7) Nếu chuỗi str 'A320' có trong 'plane' =>> in ra true và ngược lại
 * TODO 8) Nếu 'plame' bắt đầu bằng chuỗi str 'Air' => in ra true và ngược lại
 * TODO 9) Dự đoán output: console.log(plane.endsWith('khoi')); 
 * TODO 10) Giải thích biểu thức chính quy: console.log(announcement.replace(/door/g, 'gate'));
 *          ? /door/g nghĩa là gì, có tác dụng gì
 *          ? /g là gì
 * TODO 11) Viết 1 func kiểm tra dữ liệu user nhập vào có chứa ký tự 'A','b','@' không
 */