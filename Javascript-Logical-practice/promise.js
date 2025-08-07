// const getResult = async () => {
//    await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((data) => {
//       console.log("data", JSON.stringify(data));
//     })
//     .catch((error) => console.log(error));

// };

// getResult();

const getResult = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");

    let data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

getResult();
