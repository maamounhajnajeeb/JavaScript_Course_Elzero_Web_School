let email = "O@@@g...com_ D@g.com D@g.net A@Y.com O-g.com o@s.org 1@1.com";

let dot = /./g;
console.log(email.match(dot));

let word = /\w/g;
console.log(email.match(word));

let oppositeWord = /\W/g;
console.log(email.match(oppositeWord));

let valid = /\w@\w.(com|net)/g;
console.log(email.match(valid));