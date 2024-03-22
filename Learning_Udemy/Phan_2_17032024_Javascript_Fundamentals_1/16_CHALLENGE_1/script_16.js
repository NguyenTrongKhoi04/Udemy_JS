"use strict";

// TODO 1)
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TODO 2)
const BMIMark =  massMark / heightMark**2;
const BMIJohn =  massJohn / (heightJohn*heightJohn);
console.log(BMIJohn, BMIMark);

// TODO 3) 
const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);