let zero = 0;

let counter = 3;

let my = [
    "Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer",
];

let first = my.slice(zero, ++counter).reverse();
console.log(first);
// console.log(zero);
// console.log(counter);


let second = my.slice(++zero, --counter).reverse() 
console.log(second);
// console.log(zero);
// console.log(counter);


let third = second[--zero].slice(zero, --counter)+second[++zero].slice(counter);
console.log(third);
// console.log(zero);
// console.log(counter);


let fourth = third[third.length-counter]+third[third.length-zero].toUpperCase();
console.log(fourth);
// console.log(zero);
// console.log(counter);
