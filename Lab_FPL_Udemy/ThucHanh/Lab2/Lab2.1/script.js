// Mảng sự kiện trong trận đấu
const events = [
    [10, 'GOAL'],
    [25, 'Substitution'],
    [40, 'GOAL'],
    [64, 'Yellow Card'],  // Thẻ vàng phút 64 (sai)
    [75, 'Red Card'],
    [82, 'GOAL'],
  ];
  
  // 1. Tạo mảng sự kiện khác nhau
  const uniqueEvents = Array.from(new Set(events.map(event => event[1])));
  console.log('Các sự kiện khác nhau trong trận đấu:', uniqueEvents);
  
  // 2. Xóa sự kiện thẻ vàng phút 64
  const correctedEvents = events.filter(event => !(event[0] === 64 && event[1] === '🟨 Yellow Card'));
  
  // 3. In ra console thông báo về trung bình mỗi 9 phút
  const totalMinutes = 90;
  const eventCount = correctedEvents.length;
  const averageEventsPerMinute = eventCount / totalMinutes;
  console.log(`${eventCount} sự kiện xảy ra, trung bình mỗi ${Math.round(totalMinutes / eventCount)} phút.`);
  
  // 4. In ra màn hình với đánh dấu cho mỗi sự kiện trong hiệp 1 hay hiệp 2
  correctedEvents.forEach(event => {
    const [minute, action] = event;
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    const adjustedMinute = minute <= 45 ? minute : minute - 45;
    console.log(`[${half}] ${adjustedMinute}: ${action}`);
  });
  