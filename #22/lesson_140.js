let mails = "O@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";

let mailsReExp = /\w@\w\w.sa/ig;
console.log(mails.match(mailsReExp));

let newMailsReExp = /\w+@\w+.(com|sa|net|ru)/ig;
console.log(mails.match(newMailsReExp));

let ReExp = /\w+@\w+.\w+/ig;
console.log(mails.match(ReExp));


let nums = "0110 10 150 05120 0560 350 00";

let numsRegExp = /0\d\d0/ig;
console.log(nums.match(numsRegExp));

// + one or more
let numsRE = /0\d+0/ig;
console.log(nums.match(numsRE));

// * zero or more
let zeroRE = /0\d*0/ig;
console.log(nums.match(zeroRE));

// ? zero or one
let zeroOrO = /0\d?0/ig;
console.log(nums.match(zeroOrO));


let urls = "https://google.com http://www.website.net web.com";

let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlRe));