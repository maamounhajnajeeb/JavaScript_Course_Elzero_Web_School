// const myPromise = new Promise((resolveFunc, rejectFunc) => {
//     let employees = ["Ahmad", "Maamoun", "Sayed", "Mahmoud"];
//     if (employees.length === 4) {
//         resolveFunc(employees);
//     } else {
//         rejectFunc(Error("Number of employees isn't 4"));
//     }
// });

// myPromise.then((resolvedValue) => {
//     resolvedValue.length = 2;
//     console.log(resolvedValue);
//     return resolvedValue;
// });

// myPromise.then((resolvedValue) => {
//     resolvedValue.length = 1;
//     return resolvedValue;
// });

// myPromise.then((resolvedValue) => {
//     console.log(`the chosen employee ${resolvedValue}`)
// });



// three error

// const myPromise = new Promise((resolveFunc, rejectFunc) => {
//     let employees = [];
//     if (employees.length === 4) {
//         resolveFunc(employees);
//     } else {
//         rejectFunc(Error("Number of employees isn't 4"));
//     }
// });

// myPromise.then((resolvedValue) => {
//     resolvedValue.length = 2;
//     console.log(resolvedValue);
//     return resolvedValue;
// });

// myPromise.then((resolvedValue) => {
//     resolvedValue.length = 1;
//     return resolvedValue;
// });

// myPromise.then((resolvedValue) => {
//     console.log(`the chosen employee ${resolvedValue}`)
// });



// one error

// const myPromise = new Promise((resolveFunc, rejectFunc) => {
//     let employees = [];
//     if (employees.length === 4) {
//         resolveFunc(employees);
//     } else {
//         rejectFunc(Error("Number of employees isn't 4"));
//     }
// }).then((resolvedValue) => {
//     resolvedValue.length = 2;
//     console.log(resolvedValue);
//     return resolvedValue;
// }).then((resolvedValue) => {
//     resolvedValue.length = 1;
//     return resolvedValue;
// }).then((resolvedValue) => {
//     console.log(`the chosen employee ${resolvedValue}`)
// }).catch((rejectedReason) => console.log(rejectedReason)
// ).finally(console.log("The operation is done"));


// example: image example

// let myImagePromise = new Promise((resolveFunc, rejectFunc) => {
//     let started = true;
//     if (started) {
//         resolveFunc("started");
//     } else {
//         rejectFunc(Error("failed"));
//     }
// }).then(
//     (resolvedValue) => console.log(`Download photo from url ${resolvedValue}`),
// ).then(
//     (resolvedValue) => console.log(`Resize photo ${resolvedValue}`),
// ).then(
//     (resolvedValue) => console.log(`Adding logo ${resolvedValue}`),
// ).catch((rejectedReason) => console.log(rejectedReason)
// ).finally(console.log("Operation is Done"));


let myImagePromise = new Promise((resolveFunc, rejectFunc) => {
    let started = false;
    if (started) {
        resolveFunc("started");
    } else {
        rejectFunc(Error("Download photo from url failed"));
    }
}).then(
    (resolvedValue) => console.log(`Download photo from url ${resolvedValue}`),
).then(
    (resolvedValue) => console.log(`Resize photo ${resolvedValue}`),
).then(
    (resolvedValue) => console.log(`Adding logo ${resolvedValue}`),
).catch((rejectedReason) => console.log(rejectedReason)
).finally(console.log("Operation is Done"));
