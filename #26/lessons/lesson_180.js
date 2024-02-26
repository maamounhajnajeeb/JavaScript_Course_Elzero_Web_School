/*
    - promise avoids pyramid of doom
    - promise is the object that represent the status of an asynchronous operation and it's resulting value

    Promise status
        - pending: initial state
        - fulfilled: completed successfully
        - rejected: failed
*/

const myPromise = new Promise((resolvedFunc, rejectFunc) => {
    let connect = true;
    if (connect) {
        resolvedFunc("Connection Established");
    } else {
        rejectFunc(Error("Connection Failure"));
    }
}).then(
    (resolvedValue) => console.log(`Good ${resolvedValue}`)
    , (rejectedValue) => console.log(`Bad ${rejectedValue}`));

console.log(myPromise);

// const myPromise = new Promise((resolvedFunc, rejectFunc) => {
//     let connect = true;
//     if (connect) {
//         resolvedFunc("Connection Established");
//     } else {
//         rejectFunc(Error("Connection Failure"));
//     }
// });

// console.log(myPromise);

// myPromise.then(
//     (resolvedValue) => console.log(`Good ${resolvedValue}`)
//     , (rejectedValue) => console.log(`Bad ${rejectedValue}`));


// example: image example

// let myImagePromise = new Promise((resolveFunc, rejectFunc) => {
//     let done = true;
//     if (done) {
//         resolveFunc("started");
//     } else {
//         rejectFunc(Error("failed"));
//     }
// });

// console.log(myImagePromise);

// myImagePromise.then(
//     (resolvedValue) => console.log(`Download photo from url ${resolvedValue}`),
//     (rejectedValue) => console.log(`Download photo from url ${rejectedValue}`),
// );

// console.log(myImagePromise);

// myImagePromise.then(
//     (resolvedValue) => console.log(`Resize photo ${resolvedValue}`),
//     (rejectedValue) => console.log(`Resize photo ${rejectedValue}`),
// );

// myImagePromise.then(
//     (resolvedValue) => console.log(`Adding logo ${resolvedValue}`),
//     (rejectedValue) => console.log(`Adding logo ${rejectedValue}`),
// );
