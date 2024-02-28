// Dữ liệu từ API
const game = {
    teams: ['Bayern Munich', 'Liverpool'],
    players: {
      team1: ['Neuer', 'Sule', 'Hernandez', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman', 'Sané'],
      team2: ['Alisson', 'Alexander-Arnold', 'Matip', 'Van Dijk', 'Robertson', 'Fabinho', 'Henderson', 'Mane', 'Salah', 'Firmino', 'Jota'],
    },
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
  };
  
  // Task 1
  const [gk, ...fieldPlayers] = game.players.team1;
  const players1 = { gk, fieldPlayers };
  const players2 = { gk: game.players.team2[0], fieldPlayers: game.players.team2.slice(1) };
  
  // Task 2
  const allPlayers = [...game.players.team1, ...game.players.team2];
  
  // Task 3
  const players1Final = { ...players1, fieldPlayers: [...players1.fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'] };
  
  // Task 4
  const { team1, draw, team2 } = game.odds;
  
  // Task 5
  const printGoals = (...scorers) => {
    console.log(`Goal scorers: ${scorers.join(', ')}`);
  };
  
  // Task 6
  const winner = team1 < team2 ? game.teams[0] : team1 > team2 ? game.teams[1] : 'Draw';
  
  // Task 7
  printGoals(...game.scored);
  console.log(winner);
  