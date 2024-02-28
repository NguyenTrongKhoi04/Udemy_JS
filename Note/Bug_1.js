/**
 * ? tại sao a là obj nhưng in bằng ".entries()" thì được 
 * ! vì sao Object.entries lại k in được =>> rõ ràng Object.entries dùng cho obj 
 */
let a = new Map([
    ['name','Casino'],
    [1,'Frank italia']
]);

console.log(typeof a);
console.log(a.entries());
console.log(Object.entries(a));