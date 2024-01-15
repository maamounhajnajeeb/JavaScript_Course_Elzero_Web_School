console.log(Date.parse("Sep 18, 2000"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(969224400000);
console.log(date2);

let date3 = new Date("9@18@2000");
// let date3 = new Date("9 18 2000");
// let date3 = new Date("9/18/2000");
// let date3 = new Date("9-18-2000");
console.log(date3);

let date4 = new Date("2000-9-18");
console.log(date4);

let date5 = new Date("2000-9");
console.log(date5);

let date6 = new Date("2000");
console.log(date6);

let date7 = new Date(2000, 8, 18, 8, 10, 0);
console.log(date7);

let date8 = new Date(2000, 8, 18);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);
