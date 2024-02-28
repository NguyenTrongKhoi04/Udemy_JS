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
 * TODO 1) Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
 * TODO 2) Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
            các vị trí khác. Ví dụ, Bayern Munich (team 1) bạn sẽ tạo 1 biến ('gk') với tên của 
            thủ môn, and one array ('fieldPlayers') with all the remaining 10 field players
 * TODO 3) Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
 * TODO 4) Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1 
            mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào 
            Thiago', 'Coutinho' và 'Perisic'
 * TODO 5) Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là 
            'team1', 'draw' và 'team2')
 * TODO 6) Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
            spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
 * TODO 7) Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng . In ra đội chiến thắng đó mà 
            không sử dụng if/else hoặc toán tử 3 ngôi
 */