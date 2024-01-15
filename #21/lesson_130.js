// array.some() method

let nums = [1, 2, 3, 4, 5, 6, 7];

let myNumber = 5;

//let check = nums.some(e => {
//    return e > 5;
//});

let check = nums.some(e => {
    return e > myNumber;
}, myNumber);

console.log(check);


// 
function checkValues(arr, val) {
    return arr.some(e => e === val, val);
}

console.log(checkValues(nums, myNumber));

//
let range = {
    min: 10, max: 20,
};

let checkRange = nums.some(function (e) {
//    console.log(this.min, this.max, e);
    return e >= this.min && e <= this.max;
}, range);

console.log(checkRange);