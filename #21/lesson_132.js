console.log("Maamoun");
console.log(..."Maamoun");
console.log([..."Maamoun"]);


let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let myArrays = [...myArray1, ...myArray2];
console.log(myArrays);


let copiedArray = [...myArray1];
console.log(copiedArray);


let myFriends = ["Maamoun", "Ahmad", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];
myFriends.push(...thisYearFriends);

console.log(myFriends);


let myNums = [10, 20, -100, 100, 1000, 500];
//console.log(myNums); // NaN
console.log(Math.max(...myNums));


let obj1 = {
    a: 1, b: 2
};

let obj2 = {
    c: 3, d: 4
};

console.log({...obj1, ...obj2});