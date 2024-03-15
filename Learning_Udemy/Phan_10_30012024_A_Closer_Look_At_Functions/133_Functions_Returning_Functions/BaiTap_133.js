'use strict';

const oneWord = function (str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};

const high5 = function (){
    console.log('Hi');
};
document.body.addEventListener('click',high5);// click vào bất kỳ 1 phần tử của html sẽ chạy
['Nguyen','Trong','Khoi'].forEach(high5);

/**
 * * Sử dụng những dữ liệu cho sẵn
 * TODO 1) Viết hàm "transformer = function (str, fn){...}" để in ra output như sau
 *          ! Cùng 1 func nhưng khi thay đổi đối só sẽ ra 2 output sau
 *          ? output 1:
                Original string: JavaScipt is the best!
                BaiTap_132.js:15 Transformed string: JAVASCIPT is the best!
                BaiTap_132.js:17 Transformed by: upperFirstWord
 *          ? output 2:
                Original string: JavaScipt is the best!
                BaiTap_132.js:15 Transformed string: javasciptisthebest!
                BaiTap_132.js:17 Transformed by: oneWord
 * TODO 2) Khi nhấn vào phần tử html bất kỳ sẽ callbakc func high5()
 * TODO 3) Dự đoán output: 
 *          ? ['Nguyen','Trong','Khoi'].forEach(high5);
 *          ? Thay các phần tử kiểu str bằng số được k 
 */