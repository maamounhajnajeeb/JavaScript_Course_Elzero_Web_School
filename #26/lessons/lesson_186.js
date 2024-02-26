/*
    Await
        - Await works only inside Async functions
        - Await make JavaScript wait for promise result
        - Await is more elegant syntax of getting promise result
*/


// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam the good promise");
//     }, 3000);
// });

// async function readData() {
//     console.log("Before Promise");
//     await myPromise.then(
//         (resolvedValue) => console.log(resolvedValue));
//     console.log("After Promise");
// }

// readData();


// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam the good promise");
//     }, 3000);
// });

// async function readData() {
//     console.log("Before Promise");
//     console.log(await myPromise);
//     console.log("After Promise");
// }

// readData();


const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
    //     res("Iam the good promise");
        rej(Error("Iam the bad promise"));
    }, 3000);
});

async function readData() {
    console.log("Before Promise");
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");
}

readData();
