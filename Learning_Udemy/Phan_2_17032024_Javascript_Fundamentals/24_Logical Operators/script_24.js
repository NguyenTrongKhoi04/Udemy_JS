"use strict";

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Dự đoán ouput
 *         ? console.log(hasDriversLicense && hasGoodVision);
 *         ? console.log(hasDriversLicense || hasGoodVision);
 *         ? console.log(!hasDriversLicense);
 * TODO 2) KIểm tra nếu Sarah có bằng lái xe và thị lực tốt thì in ra "Sarah is able to drive!"
 * TODO 3) Dự đoán oupput "console.log(hasDriversLicense && hasGoodVision && isTired);"
 * TODO 4) Kiểm tra Sarah có bằng lái + thị lực tốt + không mệt mỏi =>> in ra "được lái xe"
 */

// TODO 1)
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// TODO 2)
if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

// TODO 3)
console.log(hasDriversLicense && hasGoodVision && isTired);

// TODO 4)
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
