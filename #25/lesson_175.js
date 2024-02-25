console.log("one");

setTimeout(() => {
    console.log("three");
}, 0);

setTimeout(() => {
    console.log("four");
}, 0);

console.log("two");

//

setTimeout(() => {
    console.log(myVar);
}, 0);

let myVar = 4;
myVar += 100;
