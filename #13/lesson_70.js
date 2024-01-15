// first challenge
// 1]

let names = function (...people) {
    // return `${typeof people[1]} [${people.join("], [")}] => Done !`;
    return `String [${people.join("], [")}] => Done !`;
}
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// 2]
let humans = (...people) => `String [${people.join("], [")}] => Done !`;
console.log(humans("Osama", "Mohamed", "Ali", "Ibrahim"));

///////////////////////////////////////////////////////////////////////////

// second challenge
// 1]

let myNumbers = [
    20, 50, 10, 60,
];

// sum = myNumbers.reduce((accumlator, currentValue) => {return accumlator+currentValue}, 0);

let calc = (one, two, ...nums) => {
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return -one -two +sum;
};
console.log(calc(10, myNumbers[1], ...myNumbers));

// 2]

let calculator = function cal(one, two, ...nums) {
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return -one -two +sum;
};
console.log(calculator(10, myNumbers[1], ...myNumbers));
