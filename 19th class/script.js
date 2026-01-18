console.log("Hello, World! This is the 19th class script.");

console.log("Before Api Calling");

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log("After Api Calling");
//     console.log(data);
//   });

// console.log("After Fetch Initiated");

// async function fetchData() {
//   console.log("Before Api Calling");
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await response.json();
//   console.log("After Api Calling");
//   console.log(data);
// }
// fetchData();
console.log("------------------------------------------------------------------------------------------------------")
console.log("Class 8 of JS");


console.log("Before API Calling");
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response, "response");
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         console.log(response, "response");
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     });
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response, "response");
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     });

console.log("After API Calling");

console.log("------------------------------------------------------------------------------------------------------")

function getAllData(url) {
    fetch(url)
        .then((response) => {
            console.log(response, "response");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data, "data");
        })
        .catch((error) => {
            console.log(error, "error");
        });
}
getAllData("https://fakestoreapi.com/products");
getAllData("https://jsonplaceholder.typicode.com/users");
getAllData("https://jsonplaceholder.typicode.com/tasks");
getAllData("https://jsonplaceholder.typicode.com/todos");
getAllData("https://jsonplaceholder.typicode.com/photos");
getAllData("https://jsonplaceholder.typicode.com/comments");

console.log("------------------------------------------------------------------------------------------------------")

function getAllData(entity) {
    fetch("https://jsonplaceholder.typicode.com/" + entity)
        .then((response) => {
            console.log(response, "response");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data, "data");
        })
        .catch((error) => {
            console.log(error, "error");
        });
}

getAllData("products");
getAllData("users");
getAllData("posts");
getAllData("todos");
getAllData("photos");
getAllData("comments");
getAllData("albums");
getAllData("tasks");



console.log("------------------------------------------------------------------------------------------------------")


