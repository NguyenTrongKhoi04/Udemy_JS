/**
 * ? Tại sao console.log(); đầy tiên có 11 phần tử nhưng khi mở chi tiết thì chỉ có 10 phần tử
 */

const gameEvents = new Map([
    [17,'GOAL'],
    [35,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow card'],
]);

/**
 * * Sử dụng những dữ liệu trên 
 * TODO 1) Create an arr 'events' of the game different game events that happened (no duplicates)
 * TODO 2) sau khi game end. Chúng ta phát hiện thấy thẻ vàng phút 64 là k đúng. Hãy xóa thẻ vàng đó đi
 * TODO 3) 
 */

// TODO 1)
const events = new Map([...gameEvents]);
console.log(events);

// TODO 2) 
events.delete(64);
console.log(events);