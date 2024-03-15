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
        x: 3.35,
        team2: 6.5,
    },
};

// TODO 1)
let [players1,players2] = game.players;

// TODO 2)
[gk1,...fieldPlayers1] = players1;
[gk2,...fieldPlayers2] = players2;
console.log(gk2,fieldPlayers2);

// TODO 3)
let allPlayers = [...players1,...players2];console.log(allPlayers); 

// TODO 4)
let players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

// TODO 5) 
// let {team1, x: draw, team2} = game.odds; // cách 1
let {odds:{team1, x: draw, team2}} = game;// cách 2
console.log(draw,team1,team2);

// TODO 6) 
const printGoals = function (...people){
  console.log(people);
  console.log(`Có tất cả ${people.length} người ghi bàn`);
}
printGoals('Lewandowski','Gnarby','Lewandowski','Hummels');
printGoals('Lewandowski','Gnarby');

// TODO 7) 
// team1,team2 lấy từ phần 5)
team1 < team2 && console.log('team 1 likely win');
team1 > team2 && console.log('team 2 likely win');