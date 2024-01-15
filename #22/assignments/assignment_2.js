let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let RegEx = /Os\d*O/g;

console.log(specialNames.match(RegEx));

// Output
// ['Os10O', 'OsO', 'Os100O']
// how to put more than one number