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

// 1️⃣ Find the maximum number in an array

// const arr = [5, 9, 2, 4, 7];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("max", max);

// 2️⃣ Find the sum of all elements in an array

// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log("Sum of all element..", sum);

// 3️⃣ Find all even numbers from an array

// const arr = [1, 2, 3, 4, 5,6];

// let even = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     even.push(arr[i]);
//   }
// }

// console.log("all even number from an array", even);

// 4️⃣ Check if an array contains a specific value

// const arr = [2, 4, 0, 8];

// let findaValue = 6;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == findaValue) {
//     console.log(`${findaValue} is present in this array.`);
//   }
// }

// 5️⃣ Remove duplicate elements from an array

// const arr = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArray = [];
// let duplicateVlaue = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArray.includes(arr[i])) {
//     uniqueArray.push(arr[i]);
//   } else {
//     duplicateVlaue.push(arr[i]);
//   }
// }

// console.log("Unique array.", uniqueArray);
// console.log("duplicate value.", duplicateVlaue);

// solution no 2

// let arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = [... new Set(arr)]

// console.log("uniqueArray",uniqueArray)

// solution no 3
// let arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = arr.filter((value, index, arr) => {
//  return arr.indexOf(value) == index;
// });
// console.log("uniqueArray", uniqueArray);

// 6️⃣ Find the second largest number in an array

// const arr = [1, 5, 3, 6, 10, 9, 7];

// let firstLargeNumber = -Infinity;
// let secondLargeNumber = -Infinity;
// let thirdLargeNumber = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > firstLargeNumber) {
//     secondLargeNumber = firstLargeNumber;
//     thirdLargeNumber = secondLargeNumber;
//     firstLargeNumber = arr[i];
//   } else if (arr[i] > secondLargeNumber && arr[i] !== firstLargeNumber) {
//     thirdLargeNumber = secondLargeNumber;
//     secondLargeNumber = arr[i];
//   } else if (arr[i] > thirdLargeNumber && arr[i] !== secondLargeNumber) {
//     thirdLargeNumber = arr[i];
//   }
// }

// console.log("firstLargeNumber", firstLargeNumber);
// console.log("secondLArgeNumber", secondLargeNumber);
// console.log("thirdLargeNumber", thirdLargeNumber);

// 7️⃣ Reverse an array without using reverse()

// const arr = [1, 2, 3, 4, 5];

// for (i = 0; i < Math.floor(arr.length / 2); i++) {
//   temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }

// console.log("arr", arr);

// solution no 2

// const arr = [1, 2, 3, 4, 5];

// const reverseArray = [...arr].reverse()
// console.log("reverseArray",reverseArray)

// solution no 3
// const arr = [1, 2, 3, 4, 5];

// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   [arr[start], arr[end]] = [arr[end], arr[start]];

//   start++;
//   end--;
// }

// console.log("Reverse array", arr);

// 8️⃣ Check if two arrays are equal (same elements, same order)

// Example: [1, 2, 3] & [1, 2, 3] => true

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 4];

// let areEqual = true; //  assume

// if (array1.length !== array2.length) {
//   areEqual = false;
// }

// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] !== array2[i]) {
//     areEqual = false;
//   }
// }

// console.log("array are queal or not ", areEqual);

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 5];

// const checkArrayequal = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log("array are equal or not ?", checkArrayequal(array1, array2));

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 4];

// let areEqual = true;

// if (arr1.length !== arr2.length) {
//   areEqual= false;
// }

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] != arr2[i]) {
//    areEqual= false;
//   }
// }

// console.log("arrya are equal ",areEqual);

// 🔹 Challenging:
// 9️⃣ Find the pair of numbers whose sum is a given target

// Example: [2, 4, 5, 7, 8], target = 9 => (2, 7) or (4, 5)

// const arr = [2, 4, 5, 7, 8,1];

// let target = 9;

// for (i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if(arr[i] + arr[j] === target) {
//         console.log( `pair found .. (${arr[i]}, ${arr[j]})`)
//     }
//   }
// }

// 🔟 Flatten a nested array
// Example: [1, [2, [3, 4], 5]] => [1, 2, 3, 4, 5]

// const arr = [1, [2, [3, 4], 5]];

// let flattenArray = arr.flat(Infinity);

// console.log("flatten Array", flattenArray);

// solution no 2

// const arr = [1, [2, [3, 4], 5]];

// const flattenArray = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log("flatten array ", flattenArray(arr));

// .............................................................................................................

/* 
🔥 Advanced Array Logic Questions


1️⃣ Rotate an array by K positions
Example:
Input: [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3] (right rotation)

2️⃣ Find all elements that appear more than once
Example:
Input: [1, 2, 3, 2, 4, 1]
Output: [1, 2]

3️⃣ Find the frequency of each element in an array
Example:
Input: [1, 2, 2, 3, 1, 4]
Output: {1: 2, 2: 2, 3: 1, 4: 1}

4️⃣ Find the missing number in a given range
Example:
Input: [1, 2, 4, 5]
Expected: 3 is missing

5️⃣ Find the intersection of two arrays
Example:
Input: [1, 2, 3] and [2, 3, 4]
Output: [2, 3]


6️⃣ Find the union of two arrays (no duplicates)
Example:
Input: [1, 2, 3] and [3, 4, 5]
Output: [1, 2, 3, 4, 5]

7️⃣ Group elements by type (number, string, etc.)
Example:
Input: [1, "a", true, 2, "b", false]
Output: {number: [1, 2], string: ["a", "b"], boolean: [true, false]}

8️⃣ Find longest increasing subarray
Example:
Input: [1, 2, 2, 3, 4, 1, 5, 6]
Output: [1, 5, 6] or [2, 3, 4] depending on logic

9️⃣ Remove falsy values from array
Falsy values: false, 0, '', null, undefined, NaN
Input: [0, "hello", false, 42, "", null]
Output: ["hello", 42]

🔟 Chunk an array into smaller arrays of size n
Input: [1, 2, 3, 4, 5, 6], size = 2
Output: [[1, 2], [3, 4], [5, 6]]
*/

// 1️⃣ Rotate an array by K positions
// Example:
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3] (right rotation)

//note : when rotate array by k position then we shift last k element to start .

// let arr = [1, 2, 3, 4, 5];

// k = 2;

// const rotateBy = (arr, k) => {
//   let n = arr.length;
//   //   let k = k % n; //incase k is greater then n

//   let part1 = arr.slice(-k);
//   console.log("part1", part1);

//   let part2 = arr.slice(0, n - k);
//   console.log("n-k",n - k)
//   console.log("part2.", part2);

//   let rotateByK = part1.concat(part2);

//   return rotateByK;
// };

// console.log(rotateBy(arr, k));

// 3️⃣ Find the frequency of each element in an array
// Example:
// Input: [1, 2, 2, 3, 1, 4]
// Output: {1: 2, 2: 2, 3: 1, 4: 1}

// let arr = [1, 2, 2, 3, 1, 4];

// let frequency = {};

// for (let i = 0; i < arr.length; i++) {
//   if (frequency[arr[i]]) {  // check array element is present in frequency
//     frequency[arr[i]]++;   //  increment its count
//   } else {
//     frequency[arr[i]] = 1;   // else intitiale to 1
//   }
// }

// console.log("frquency..",frequency)

// 4️⃣ Find the missing number in a given range
// Example:
// Input: [1, 2, 4, 5]
// Expected: 3 is missing

// let arr = [1, 2, 4, 5];

// let n = arr.length + 1;
// let expectedSum = (n * (n + 1)) / 2;

// console.log("ExpectedSum ", expectedSum);

// const actualSum = arr.reduce((acc, value) => acc + value, 0);

// console.log("actualSum ", actualSum);

// let missingNumber = expectedSum - actualSum

// console.log("missing Number",missingNumber)

// 5. Find the multiple missing number in a given range
// Example:
// Input: [1, 2, 4, 6]

// let arr = [1, 2, 4, 6,10];

// let min = Math.min(...arr);
// let max = Math.max(...arr);

// let set = new Set(arr);
// console.log("set", set);
// let missingNumber = [];
// for (let i = min; i <= max; i++) {
//   if (!set.has(i)) missingNumber.push(i);
// }
// console.log("missing number..", missingNumber);

// 5️⃣ Find the intersection of two arrays
// Example:
// Input: [1, 2, 3] and [2, 3, 4]
// Output: [2, 3]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];

// const intersection = arr1.filter((value) => arr2.includes(value));

// console.log("intersection", intersection);

// 6️⃣ Find the union of two arrays (no duplicates)
// Example:
// Input: [1, 2, 3] and [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// let union = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (!union.includes(arr1[i])) {
//     union.push(arr1[i]);
//   }
// }

// for (let i = 0; i < arr2.length; i++) {
//   if (!union.includes(arr2[i])) {
//     union.push(arr2[i]);
//   }
// }

// console.log("Uninon..", union);

// solution No 2

// const union = [...new Set([...arr1, ...arr2])];
// console.log("union..", union);

// 7️⃣ Group elements by type (number, string, etc.)
// Example:
// Input: [1, "a", true, 2, "b", false]
// Output: {number: [1, 2], string: ["a", "b"], boolean: [true, false]}

// let input = [1, "a", true, 2, "b", false];

// let grouped = {};

// for (let i = 0; i < input.length; i++) {
//   let type = typeof input[i];

//   if (!grouped[type]) {
//     grouped[type] = [];
//   }

//   grouped[type].push(input[i]);
// }

// console.log("grouped..", grouped);

// 9️⃣ Remove falsy values from array
// Falsy values: false, 0, '', null, undefined, NaN
// Input: [0, "hello", false, 42, "", null]
// Output: ["hello", 42]

let arr = [0, "hello", false, 42, "", null];

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log("value", arr[i]);
//   if (arr[i]) {
//     result.push(arr[i]);
//   }
// }

// solution no 2

let truthyvalue = arr.filter(Boolean);

console.log("truthyvalue", truthyvalue);

// console.log("result",result)
