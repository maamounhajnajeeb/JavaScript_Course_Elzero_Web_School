let dateNow = new Date();

let birthday = new Date("Oct 25, 82");

let dateDiff = dateNow - birthday;

console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);


console.log(dateNow.getTime()); // milleseconds from start of time until now

console.log(dateNow.getDate());

console.log(dateNow.getFullYear());

console.log(dateNow.getDay());

console.log(dateNow.getMonth());

console.log(dateNow.getMinutes());

console.log(dateNow.getSeconds());

console.log(dateNow.getHours());
