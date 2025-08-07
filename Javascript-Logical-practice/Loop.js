//  For Loop

/*
for (let i = 13; i <= 13; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}* ${j} = ${i * j}`);
  }
}
*/

// for(let i = 1 ; i<=10; i++){
//     console.log("JAY MAHADEV")
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i++);
// }

// 1. Remove duplicate elements from an array

// Example: [1, 2, 2, 3, 4, 4, 5] => [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = []

for(let i =0 ; i<arr.length; i++){

  if(!uniqueArray.includes(arr[i])){
    uniqueArray.push(arr[i])
  }

}

console.log("uniqueArray",uniqueArray)


