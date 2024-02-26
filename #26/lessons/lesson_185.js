// function getData() {
//     let myPromise = new Promise((resFunc, rejFunc) => {
//         let users = ["Maamoun"];
//         if (users.length > 0) {
//             resFunc("Users Found");
//         } else {
//             rejFunc("Users not Found");
//         }
//     });
//     return myPromise;
// }

// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log(rejectedValue)
// );


// function getData() {
//     let users = ["Maamoun"];
//     if (users.length > 0) {
//         return Promise.resolve("Users Found");
//     } else {
//         return Promise.reject("Users Not Found");
//     }
// }

// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log(rejectedValue)
// );


/*
    - Async before function mean this function return a promise
    - Async && Await help in creating asynchronous promise behavior with cleaner code
*/

async function getData() {
    let users = ["Maamoun"];
    if (users.length > 0) {
        return "Users Found";
    } else {
        throw new Error("Users Not Found");
    }
}

console.log(getData());

getData().then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(rejectedValue)
)
