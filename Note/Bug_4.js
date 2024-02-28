/**
 * ? Tại sao fn có method name
 */
'use strict';
let a = function (){
    return 1;
};


function check (fn){
    console.log(fn.name);
}
check(a);

