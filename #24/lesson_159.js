let date = new Date();

console.log(date);

let seconds = Date.now() / 1000;
console.log(`${seconds.toPrecision(12)} seconds`);


let minutes = seconds / 60;
console.log(`${minutes.toPrecision(10)} minutes`);


let hours = minutes / 60;
console.log(`${hours.toPrecision(8)} hours`);


let days = hours / 24;
console.log(`${days.toPrecision(7)} days`);


let weeks = days / 7;
console.log(`${weeks.toPrecision(5)} weeks`);


let years = days / 365;
console.log(`${years.toPrecision(3)} years`);
