/*
Promise
    - All
    - All Settled
    - Race
*/

// all

// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the first promise")
//     }, 5000);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the second promise")
//     }, 1000);
// });

// const myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the third promise")
//     }, 3000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise])
// .then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValues) => console.log(`Rejected ${rejectedValues}`)
// );


// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the first promise")
//     }, 5000);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the second promise")
//     }, 1000);
// });

// const myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the third promise")
//     }, 3000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise])
// .then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValues) => console.log(`Rejected ${rejectedValues}`)
// );


// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the first promise")
//     }, 5000);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the second promise")
//     }, 1000);
// });

// const myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the third promise")
//     }, 3000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise])
// .then((resolvedValues) => console.log(resolvedValues))
// .catch((rejectedValues) => console.log(`Rejected ${rejectedValues}`));


// allSettled

// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the first promise")
//     }, 5000);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the second promise")
//     }, 1000);
// });

// const myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the third promise")
//     }, 3000);
// });

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise])
// .then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValues) => console.log(`Rejected ${rejectedValues}`)
// );


// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the first promise")
//     }, 5000);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am the second promise")
//     }, 1000);
// });

// const myThirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("I am the third promise")
//     }, 3000);
// });

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise])
// .then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValues) => console.log(`Rejected ${rejectedValues}`)
// );


// race

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am the first promise")
    }, 5000);
});

const mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am the second promise")
    }, 1000);
});

const myThirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("I am the third promise")
    }, 3000);
});

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise])
.then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValues) => console.log(`Rejected ${rejectedValues}`)
);
