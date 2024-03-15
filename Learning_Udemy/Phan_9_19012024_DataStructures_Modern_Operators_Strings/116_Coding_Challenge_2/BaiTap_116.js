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
            'Kimich',
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

/**
 * * Sử dụng những dữ liệu đã cho sẵn ở trên 
 * TODO 1) Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví dụ: "Goal 1: Lewandowski")
 * TODO 2) Sử dụng vòng lặp để in ra tỉ lệ kết quả trận đấu và in ra bằng console.log();
 * TODO 3) In ra 3 "odds" bằng console.log(); theo dạng sau
 *      Out of victory Bayern Munich: 1.33
 *      Out of draw: 3.25
 *      Out of victory Borrussia Dortmund: 6.5
 *   * lấy tên đội bóng trực tiếp từ obj "name". Ko nên hardcode trừ trường hợp cả 2 đội hòa nhau
 *   * Gợi ý: tỷ lệ cược và obj game có tên giống nhau
 * TODO 4) tạo obj "scored" bao gồm tên cầu thủ ghi bàn, số bàn thắng
 *        { Gnarby:1,
 *          Hummels:1,
 *          Lewandowski: 2 }
 */