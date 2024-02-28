/**
 * ! clone obj sẽ trỏ đến vùng nhớ gốc 
 * * sẽ liên quan đến 2 khái niệm của hàm: "passing by value" & "passing by reference"
 * * quá trình truyền tìm hiểu các thuật ngữ sau: "called pass by reference."
 * ? Xem bài 129, phần 10 để hiểu rõ hơn
 */

a = 5;
b = a; 
b = 1; // a sẽ ko thay đổi theo b vì đây là 2 vùng nhớ khác nhau
console.log(a);// ouput: 5

let obj ={
    name: 'khoi',
    age: 18,
}

CloneObj = obj;
CloneObj.name= "Nguyen Khoi";
console.log(obj);//  output : {name: "Nguyen Khoi", age: 18}

//! Nhược điểm của việc dùng `=` để copy object đó chính xác là nó sẽ giá trị của một object lên vào một biến khác. Vì vậy, sau khi thao tác
//? Trong trường hợp trên thì CloneObj và obj cùng trỏ đến 1 đối tượng
/*
   Nên dùng cách này khi muốn copy toàn bộ object
*/
const deepCopy = (obj) => {
    let newObj = {};
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            newObj[key]=deepCopy(obj[key]);
        }else{
            newObj[key]=obj[key];
        }
    }
    return newObj;
}

NewObj = deepCopy(obj);
NewObj.age = 20;
console.log('new Obj: ', NewObj);
console.log('old Obj: ', obj);

/*
   Dùng cách này khi muốn copy một phần tử của Object hoặc có thể chia nhỏ object ra thành nhiều object con khác n
   Dùng cách này khi muốn copy một phần tử của Object hoặc có thể chưa biết các phần tử của Object có thể được copy hay không.
   Dùng cách này khi muốn copy một phần tử của Object hoặc có thể chia nhỏ Object ra thành nhiều Object con hơn
   Dùng cách này khi muốn copy một phần tử của Object hoặc có thể chia nhỏ Object ra thành nhiều Object con khác n
   Dùng hàm deepcopy khi muốn copy một phần tử của object hoặc có thể chưa biết xem object có phần tử nào có th
   Dùng cách này khi muốn copy một phần tử của object và giữ lại các phần tử khác.
*/
