document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


// ! TỰ làm 29/01/2024, Có vẻ hardCode
document.querySelector('button').addEventListener('click', getData);
function getData(){
        const text = document.querySelector('textarea').value;
        let delete_NewLine = text.toLowerCase().split('\n');

        let arrText = [];// biến để lấy từng tên
        for (let item of delete_NewLine) {
            // console.log(item);
           
            let flagItem = item.trim().split('_');
            flagItem[1] = flagItem[1].replace(flagItem[1][0],flagItem[1][0].toUpperCase())
            // console.log(typeof flagItem);// ? Tại sao lại là obj
            
            item = [...flagItem].join('');
            // console.log(flagItem);
            arrText.push(item);
            // console.log(item);
        }

        // In ra kết quả
        for(let i = 1; i<arrText.length+1; i++){
            console.log(`${arrText[i-1].padEnd(17,' ')} ${'*'.repeat(i)}`);
        }
}

// ! Đáp án chính xác
document.querySelector('button').addEventListener('click', function (){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;

        console.log(`${output.padEnd(20)}${'*'.repeat(i+1)}`);
    }
});


