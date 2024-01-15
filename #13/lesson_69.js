// try each function by it's own and comment the others
// 1]
// let a = 10;
// function parent() {

//     function child() {
//         console.log(`from child function ${a}`);
//     }

//     child();
// }

// parent();

// 2]
// function parent() {
//     let b = 10;

//     function child() {
//         let b = 20;
//         console.log(`from child function ${b}`);
//     }

//     child();
// }

// parent();


// 3]
// let c = 30;
// function parent() {

//     function child() {
//         console.log(`from child function ${c}`);
//     }

//     child();
// }

// parent();

// 4] grand child nested function
// function parent() {
//     let a = 10;

//     function child() {
//         console.log(`from child ${a}`);

//         function grandChild() {
//             console.log(a);
//         }

//         grandChild();
//     }

//     child();
// }

// parent();

// 5]
// this will cause error
// function parent() {
//     let a = 10;

//     function child() {
//         console.log(`from child${a}`);
//         // console.log(`from child${b}`); // this will through error

//         function grandChild() {
//             let b = 20;
//             console.log(a);
//             console.log(b);
//         }

//         grandChild();
//     }

//     child();
//     // console.log(`from parnet function${b}`); // this will through error
// }

// parent();
