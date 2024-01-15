let myArray = [
    1, 2, 3, 4, 5, 6,
];

let newArray = [];
for (let i=0; i<myArray.length; i++) {
    newArray.push(myArray[i]+myArray[i]);
}

console.log(newArray);

/////////
let mapArray = myArray.map(function(el, ind, arr) {
    return el+el;
}, 10);
console.log(mapArray);

//////////
let arrowMapArray = myArray.map((el, ind, arr) => el+el, 10);
console.log(arrowMapArray);

/////////////