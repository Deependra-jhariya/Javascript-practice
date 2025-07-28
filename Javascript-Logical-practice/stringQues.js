/*


🔤 Basic String Questions
✅ Reverse a string
Input: "hello" → Output: "olleh"

✅ Check if a string is a palindrome
Input: "madam" → Output: true

✅ Count the number of vowels in a string
Input: "hello" → Output: 2

✅ Check if two strings are anagrams
Input: "listen", "silent" → Output: true

✅ Capitalize the first letter of each word
Input: "hello world" → Output: "Hello World"

🔤 Intermediate String Questions
✅ Find the first non-repeating character
Input: "aabbcde" → Output: "c"

✅ Remove duplicate characters
Input: "aabbcc" → Output: "abc"

✅ Find the longest word in a sentence
Input: "The quick brown fox" → Output: "quick"

✅ Count occurrences of each character
Input: "hello" → Output: { h:1, e:1, l:2, o:1 }

✅ Check if a string contains only digits
Input: "12345" → Output: true

🔤 Advanced String Challenges
✅ Implement your own indexOf() function

✅ Compress a string using counts
Input: "aaabb" → Output: "a3b2"

✅ Check if string rotation is valid
"waterbottle" and "erbottlewat" → Output: true

✅ Longest substring without repeating characters
Input: "abcabcbb" → Output: 3 ("abc")

✅ Replace all spaces with %20 (URLify)
Input: "Mr John Smith" → Output: "Mr%20John%20Smith"



*/

// 1. Reverse a string
// Input: "hello" → Output: "olleh"

// let str = "hello";

// let reverse = "";

// const reverseString = (rev) => {
//   for (let i = rev.length - 1; i >= 0; i--) {
//     reverse += rev[i];
//   }
//   return reverse;
// };

// console.log(reverseString(str));

// 2. Check if a string is a palindrome
// Input: "madam" → Output: true

// let str = "madams";

// const palindrome = (str) => {
//   for (let i = 0; i < str.length/2; i--) {
//     if ((str[i] != str[str.length - 1 - i])) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(palindrome(str));

// 3. Count the number of vowels in a string
// Input: "hello" → Output: 2

// let str = "helloai";

// let vovel = ["a", "e", "i", "o", "u"];

// let constant = [];

// let vov = [];
// const checkVovel = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (vovel.includes(str[i])) {
//       vov.push(str[i]);
//     } else {
//       constant.push(str[i]);
//     }
//   }
//   console.log("lenght", vov.length);
// };

// checkVovel(str);

// 4 Check if two strings are anagrams
// Input: "listen", "silent" → Output: true

// let str1 = "listen";
// let str2 = "silent";

// const checkAnagram = (str1, str2) => {
//   let string1 = str1.split("").sort().join("");
//   let string2 = str2.split("").sort().join("");
//   console.log("str1", string1);
//   console.log("str2", string2);
//   return string1 === string2;
// };

// console.log(checkAnagram(str1, str2));


// ✅ Capitalize the first letter of each word
// Input: "hello world" → Output: "Hello World"

