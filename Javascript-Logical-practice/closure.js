//  closue is function that is access to the outer scope in javascript.

// const outerfunction = () => {
//   let name = "Deependra jhariya";

//   const innerFunction = () => {
//     console.log(name);
//   };

//   innerFunction()
// };
// outerfunction()

// const myfunction = (name) => {

//   function displayName() {
//     console.log(name);
//   }

//   function showName() {
//     console.log(name);
//   }

//   return displayName;
//   return showName;
// };

// let mydisplay = myfunction("diplay");
// let myshowNAme = myfunction("showname");

// mydisplay();
// myshowNAme();

// callback and HOF

const add = (a, b, cb) => {
  let result = a + b;
  cb(result);

  function myresult() {
    console.log("myResult", result);
  }
  return myresult;
};

function sum(result) {
  console.log(result);
}
let myadd = add(2, 2, sum);
myadd();
