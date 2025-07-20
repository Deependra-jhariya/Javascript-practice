/*
🔹 Beginner Level:
1️⃣ Find the maximum number in an array

// Example: [5, 9, 2, 4, 7] => 9


2️⃣ Find the sum of all elements in an array

// Example: [1, 2, 3, 4] => 10


3️⃣ Find all even numbers from an array

// Example: [1, 2, 3, 4, 5] => [2, 4]


4️⃣ Check if an array contains a specific value

// Example: [2, 4, 6, 8] & value = 6 => true


5️⃣ Remove duplicate elements from an array

// Example: [1, 2, 2, 3, 4, 4, 5] => [1, 2, 3, 4, 5]


🔹 Intermediate Level:
6️⃣ Find the second largest number in an array

// Example: [1, 5, 3, 9, 7] => 7


7️⃣ Reverse an array without using reverse()


// Example: [1, 2, 3, 4] => [4, 3, 2, 1]


8️⃣ Check if two arrays are equal (same elements, same order)

// Example: [1, 2, 3] & [1, 2, 3] => true


🔹 Challenging:
9️⃣ Find the pair of numbers whose sum is a given target

// Example: [2, 4, 5, 7, 8], target = 9 => (2, 7) or (4, 5)


🔟 Flatten a nested array
// Example: [1, [2, [3, 4], 5]] => [1, 2, 3, 4, 5]

*/

// 1. Find the maximum number in an array

// const numbers = [5, 9, 2, 4, 7];

// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//     // console.log("Maximum number of array is ",numbers[i])
//   }
// }

// console.log("Maximum number of array is ", max);

// solution 2

// const numbers = [5, 9, 2, 4, 7,10];

// const max = Math.max(...numbers)

// console.log("Maximum number of array is ", max);

// Solution 3

// const numbers = [5, 9, 2, 4, 7, 10, 11];

// const max = numbers.reduce((acc, num) => {
//   return acc > num ? acc : num;
// });

// console.log("Maximum number of array is ", max);

// 2️⃣ Find the sum of all elements in an array

// const numbers =  [1, 2, 3, 4]

// let sum = 0

// for(let i= 0; i<numbers.length ; i++){

//    sum = sum + numbers[i]
// }

// console.log("Sum of all element is", sum)

// solution no 2

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log("Sum of all element is", sum);

// 3️⃣ Find all even numbers from an array

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const evenNumber = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     // console.log((even = numbers[i]));
//     evenNumber.push(numbers[i]);
//   }
// }

// console.log("Even Number of array", evenNumber);

// solution no 2

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const evenNumber = numbers.filter((num) => {
//   return num % 2 == 0;
// });

// console.log("Even number ", evenNumber);

// 4️⃣ Check if an array contains a specific value

// const numbers = [2, 4, 6, 8];
// let valueFound = 16;
// let found = false;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === valueFound) {
//     found = true;
//   }
// }

// console.log("specific value ", found);

// 5️⃣ Remove duplicate elements from an array

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqueNumber = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (!uniqueNumber.includes(numbers[i])) uniqueNumber.push(numbers[i]);
// }

// console.log("unique number of array",uniqueNumber)


// solution no 2

const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(numbers)];

console.log("unique number of array", unique);
