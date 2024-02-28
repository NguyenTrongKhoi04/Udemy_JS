'use trict';
const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// TODO 1)
 // ! vì game.scored là arr => ko dùng Object.entries mà dùng .entries()
for (const [key,value] of game.scored.entries()) {
    console.log(`Goal ${key+1} : ${value}`);
}

// TODO 2)
let odd = Object.values(game.odds);
let average = 0;
for (const value of odd) average += value; 
average /= odd.length;
console.log(average);

// TODO 3)===================== đang chứa
    // Tự làm 25/1/2024
for (const item of Object.entries(game.odds)) {
    // console.log(item);
     name = 'draw';
     (item[0] == 'team1') && (name = game.team1) && console.log(`Odd ${game[item[0]]} of victory ${name}: ${item[1]}`);// phải là "==" thì mới biết đó là điều kiện so sánh
     (item[0] == 'team2') && (name = game.team2) && console.log(`Odd of victory ${name}: ${item[1]}`);
     (item[0] != 'team1') && (item[0] != 'team2') && console.log(`Odd of draw: ${item[1]}`);
}

    // Clear code
for (const [key,odd] of Object.entries(game.odds)) {
    let name = (key === 'x')? 'draw' : `Victory ${game[key]}`; 
    console.log(`Odds of ${name}: ${odd}`);
}
// TODO 4)
scored = {}