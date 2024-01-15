// reduce
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, curr, idx, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Curr => ${curr}`);
    console.log(`Idx => ${idx}`);
    console.log(`arr => ${arr}`);
    console.log(`sum => ${acc+curr}`);
    return acc+curr
}, 5);
console.log(add);
