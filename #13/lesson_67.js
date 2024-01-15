// var a = 1;
// let b = 2;

// function showText() {
//     console.log(`function - from golbal ${a}`);
//     console.log(`function - from golbal ${b}`);
// }

// showText()

// console.log(`from global ${a}`);
// console.log(`from global ${b}`);

////////////////
//// error [try it alone to catch the error]
// var c = 1;
// let d = 2;

// function showText() {
//     console.log(`function - from golbal ${c}`);
//     console.log(`function - from golbal ${d}`);
//     var c = 1;
//     let d = 2;
// }

// showText()

// console.log(`from global ${c}`);
// console.log(`from global ${d}`);


////////////////
// var e = 1;
// let f = 2;

// function showText() {
//     var e = 10;
//     let f = 20;
//     console.log(`function - from local ${e}`);
//     console.log(`function - from local ${f}`);
// }

// showText()

// console.log(`from global ${e}`);
// console.log(`from global ${f}`);


///////////////////////////////////
// error [scope error] [try it alone]
// function showText() {
//     var e = 10;
//     let f = 20;
//     console.log(`function - from local ${e}`);
//     console.log(`function - from local ${f}`);
// }

// showText()

// console.log(`from global ${e}`);
// console.log(`from global ${f}`);
