// Deep copy and shallow copy example

// Example of object copy

// Shallow copy :- A shallow copy a copy of a boject and create a new obj its can not copy od nested object .

// const obj = {
//     name:"Deependra"
// }

// const user = obj

// user.name = "Sanket"

// console.log("object is ",obj)

// shallow copy

// const obj = {
//   name: "Deependra",
// };

// 1
// const user = Object.assign({},obj);

// no2

// const user = {...obj}

// user.name = "sanket";

// console.log("Obj is ", obj);
// console.log("user is", user);

// Deep copy :-  Deep copy is copy a nested object  from object and create a new object 

const obj = {
  name: "Deependra",
  address: {
    city: "jabalput",
  },
};

const user = JSON.parse(JSON.stringify(obj)) // this is for making obj into deep copy 

user.address.city = "Nagpur"

console.log("obj nested is ",obj)
console.log("user nested is ",user)
