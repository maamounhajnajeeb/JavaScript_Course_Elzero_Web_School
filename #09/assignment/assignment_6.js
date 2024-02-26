let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1 = arr1.splice(2);
arr2 = arr2.splice(2, 2);
let F = arr2.shift();

allArrs = allArrs.concat(
    F, arr1, arr2
);

console.log(allArrs.join("").toLowerCase()); // fxy