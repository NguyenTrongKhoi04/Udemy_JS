'use strict';

const oneWord = function (str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};

// TODO 1)
//Higher-order function
const transformer = function (str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScipt is the best!', upperFirstWord);
transformer('JavaScipt is the best!', oneWord);

// TODO 2)
//JS uses callback all the time
const high5 = function (){
    console.log('Hi');
};
document.body.addEventListener('click',high5);// click vào bất kỳ 1 phần tử của html sẽ chạy

// TODO 3)
['Nguyen','Trong','Khoi'].forEach(high5);
[1,2,3].forEach(high5);
