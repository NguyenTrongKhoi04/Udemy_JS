// Dữ liệu về trận đấu và cầu thủ
const game = {
    teams: {
      home: 'Bayern Munich',
      away: 'Borussia Dortmund'
    },
    result: {
      goalsHome: 2,
      goalsAway: 1
    },
    odds: {
      winHome: 1.33,
      draw: 3.25,
      winAway: 6.5
    },
    scored: [
      { player: 'Lewandowski', goals: 1 },
      { player: 'Mueller', goals: 1 },
      { player: 'Reus', goals: 1 }
    ]
  };
  
  // 1. In ra cầu thủ và số bàn thắng đã ghi
  console.log("1. Cầu thủ ghi bàn:");
  game.scored.forEach(player => {
    console.log(`Goal ${player.goals}: ${player.player}`);
  });
  
  // 2. Tính tỉ lệ kết quả trận đấu
  const totalGoals = game.result.goalsHome + game.result.goalsAway;
  const homeWinPercentage = (game.result.goalsHome / totalGoals) * 100;
  const drawPercentage = (game.result.goalsAway === game.result.goalsHome ? 100 : 0);
  const awayWinPercentage = 100 - homeWinPercentage - drawPercentage;
  
  console.log("\n2. Tỉ lệ kết quả trận đấu:");
  console.log(`Tỉ lệ thắng của ${game.teams.home}: ${homeWinPercentage.toFixed(2)}%`);
  console.log(`Tỉ lệ hòa: ${drawPercentage.toFixed(2)}%`);
  console.log(`Tỉ lệ thắng của ${game.teams.away}: ${awayWinPercentage.toFixed(2)}%`);
  
  // 3. In ra tỉ lệ cược theo định dạng yêu cầu
  console.log("\n3. Tỉ lệ cược:");
  console.log(`Tỉ lệ thắng của ${game.teams.home}: ${game.odds.winHome}`);
  console.log(`Tỉ lệ hòa: ${game.odds.draw}`);
  console.log(`Tỉ lệ thắng của ${game.teams.away}: ${game.odds.winAway}`);
  