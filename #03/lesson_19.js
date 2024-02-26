console.log(+100); // 100 ,type: number
console.log(+"100"); // 100 ,type: number
console.log(+"-100"); // -100 ,type: number
console.log(+"Osama"); // NaN ,type: number
console.log(+15.5); // 15.5, type: number
console.log(+0xff); // 255, type: number
console.log(+null); // 0, type: number
console.log(+false); // 0, type: number
console.log(+true); // 1, type: number


console.log(-"100"); // -100 ,type: number
console.log(-"-100"); // 100 ,type: number
console.log(-"Osama"); // -NaN ,type: number
console.log(-15.5); // -15.5, type: number
console.log(-0xff); // -255, type: number
console.log(-null); // -0, type: number
console.log(-false); // -0, type: number
console.log(-true); // -1, type: number

console.log(Number("100"));