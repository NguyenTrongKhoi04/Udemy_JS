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

// TODO 1)
console.log();
const events = [...new Set(gameEvents.values())];
console.log(events);

// TODO 2) 
gameEvents.delete(64);
console.log(gameEvents);

// TODO 3) 
let time = [...gameEvents.keys()].pop();// vì trận đấu này kéo dài 92 phút 
console.log(time);
    // Nếu ko kéo dài 92 thì mặc định 90/...
console.log(`An event happened, on average, every ${time / gameEvents.size}`);

// TODO 4)
    // * Cách 1
half = new Map([ 
    [true, '[FIRST HALF]'],
    [false, '[SECOND HALF]'],
]);
for (const [key,value] of gameEvents) {
    halfCheck = half.get(key < 45);
    console.log(`${halfCheck} ${key}: ${value}`);
}

console.log('==================================');
    // * Cách 2
for (const [min,event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}


