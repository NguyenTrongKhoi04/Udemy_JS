"use strict";

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

/**
 * * Sử dụng những dữ liệu trên để hoàn thành bài tập
 * TODO 1) Ghép những biến trên thành 1 câu có nghĩa (tôi tên là..., làm nghề..., dự định... năm 2037)
 * TODO 2) In ra theo đúng format
                String
                multiple
                lines
 */

// TODO 1)
    // hard code
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

    // clean code
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// TODO 2)
    // hard code
console.log("String \n\
multiple \n\
lines"
);

    // clean code
console.log(`String
multiple
lines`);