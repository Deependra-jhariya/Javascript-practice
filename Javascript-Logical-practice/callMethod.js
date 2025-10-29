// call () -  call method is method that take a reference as an argument with this keyboard and the second argument is passing indivisually with coma sepratedlly .

let name1 = {
  firstName: "Deependra",
  lastName: "Jhairya",
};
let name2 = {
  firstName: "sachin",
  lastName: "Jhairya",
};
let printFullName = function (age,place) {
  console.log(`my name is ${this.firstName} ${this.lastName} and i am ${age} years old and i live in ${place}`);
};

// printFullName.call(name2 , "25" ,"jabalpur");

// apply()-  Applu method is exactly same as call but only difference i passing the argument , the first argument is a reference of the object and the second argument is an array .


printFullName.apply(name2 ,[ "26" ,"jabalpur"]);

// bind () -  Bind method the same of the call method this is creating a copy a function and return a funtion that we can invoked later. 

const printName = printFullName.bind(name2 ,"26" ,"jabalpur");
console.log("printName",printName)
printName()
