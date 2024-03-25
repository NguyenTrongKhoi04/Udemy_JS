"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) In ra các phần tử của jonas theo chiếu từ dưới lên (true, ["Michael", "Peter", "Steven"], "teacher",....)
 * TODO 2) Sử dụng vòng lặp trong vòng lặp để xây dựng 1 bài thể dục
 */

// TODO 1) 
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// TODO 2) 
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}