"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

const nameKey = "Name";

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán output của
 *          ? console.log(jonas.lastName);
 *          ? console.log(jonas["lastName"]);
 *          ? console.log(jonas["first" + nameKey]);
 *          ? console.log(jonas["last" + nameKey]);
 *          ? console.log(jonas.'last' + nameKey)
 * TODO 2) dùng "prompt" để nhập vào thuộc tính của Jonas (job, age,...)
 *          ! Nếu không có =>> in ra "Wrong request! Choose between firstName, lastName, age, job, and friends"
 *          ! nếu có thì in ra giá trị của thuộc tính đó
 * TODO 3) Dự đoán output "jonas.location = "Portugal";jonas["twitter"] = "@jonasschmedtman";console.log(jonas);"
 * TODO 4) "Jonas has 3 friends, and his best friend is called Michael" =>> in ra bằng cách trích xuất từ obj "jonas"
 */

// TODO 1)
console.log(jonas.lastName);
console.log(jonas["lastName"]);

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

// TODO 2)
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// TODO 3)
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// TODO 4)

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
