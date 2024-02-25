let date = new Date();

date.setDate(0);
console.log(date);

let day = date.getDate();

let month = date.toLocaleString("default", {month: "long"});
console.log(`Previous Month is ${month} and last day is ${day}`);
