const restaurant = {
    name: 'Classio Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Ttaly',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    startMenu:['Focaccia','Brushchetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Paste','Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,// open 24 hours
            close:24
        },
    }
}
let a = 111;
let b = 999;
/**
 * * sử dụng dữ liệu sẵn có ở trên
 * TODO 1) destructur location, categories, openingHours (TIPS: hãy thử truy xuất bất kỳ 1 phần tử nào của obj 'restaurant' rồi đi làm bài tập)
 * TODO 2) giống phần 1 nhưng sử dụng Alias (tên thay thế)
 * TODO 3) Khai báo thêm 1 thành phần "menu, starter" của đối tượng "restaurant"
 * TODO 4) khai báo đối tượng obj có "a: 9, b: 10, c: 11" và destructur "a" & "b"
 * TODO 5) destructur "open" và "close" của "fri"
 * TODO 6) destructur "open" và "close" của "sat" trong openingHours (destructur báo 1 trên 1 dòng, dòng đó ko được chứa dấu chấm)
 * TODO 7) viết 1 func để in ra tham số. Chạy hàm đó với tham số là obj
 * TODO 8) Viết 1 func định nghĩa tham số obj (tham số có giá trị mặc định)
 */