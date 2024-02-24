let dateNow = new Date();

let myBirthDate = new Date("Sep 18, 2000");

let microseconds = dateNow - myBirthDate;
let seconds = microseconds / 1000;

let minutes = seconds / 60;
console.log(minutes);

let hours = minutes / 60;
console.log(hours);

let days = hours / 24;
console.log(days);

let months = days / 30;
console.log(months);

let years = months / 12;
console.log(years);

let decades = years / 10;
console.log(decades);
