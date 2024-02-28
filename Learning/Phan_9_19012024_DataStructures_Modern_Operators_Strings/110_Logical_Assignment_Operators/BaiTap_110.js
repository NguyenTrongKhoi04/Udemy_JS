'use trict';
let rest1 = {
    name: 'Capri',
    numGuests: 20
};
let rest2 = {
    name: "shop",
    owner: 'Khoi Nguyen'
}
let rest3 = {
    name: "shop2",
    owner: 'Tuan'
}
/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output và giải thích
 *         ? rest1.numGuests = rest1.numGuests || 10; 
 *         ? rest2.numGuests = rest2.numGuests || 10; 
 * TODO 2) clear code với "||="
 * TODO 3) Nếu rest1.numGuests = 0. Dự đoán output: 
 *         ? rest1.numGuests = rest1.numGuests || 10; 
 *         ? Giờ tôi muốn "output: 0" thì làm thế nào 
 * TODO 4) Dự đoán output và giải thích: 
 *         ? rest1.numGuests ??= 10; console.log(rest1);
 *         ? rest2.numGuests ??= 10; console.log(rest2);
 *         ? rest2.numGuests=undefined; rest3.numGuests ??= null; console.log(rest3);
 * TODO 5) Dự đoán output và giải thích: (copy lại 2 obj rest1&2 được cung cấp ở trên rồi làm)
 *         ? rest1.owner = rest1.owner && 10; 
 *         ? rest2.owner = rest2.owner && 10; 
 * TODO 6) Dự đoán output và giải thích: (copy lại 2 obj rest1&2 được cung cấp ở trên rồi làm)
 *         ? rest1.owner &&= 'ANYNOMOUS';
 *         ? rest2.owner &&= 'ANYNOMOUS';
 *         ? Giải thích vì sao "rest1.owner &&= 10;console.log(rest1);" khác value "rest1.owner = rest1.owner && 10;console.log(rest1);" 
 */