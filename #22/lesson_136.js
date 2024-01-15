let tld = "Com Net Org Info Io Code";

let tldRegEx = /(org|info|io)/i;
let newTldRegEx = /(info|org|io)/i;
let globalTldRegEx = /(info|org|io)/ig;

console.log(tld.match(tldRegEx));
console.log(tld.match(newTldRegEx));
console.log(tld.match(globalTldRegEx));


let nums = "12345678910";
let numsRegEx = /[0-9]/;
let newNumsRegEx = /[0-3]/g;

console.log(nums.match(numsRegEx));
console.log(nums.match(newNumsRegEx));


let notNums = "12345678910";
let notNsRe = /[^0-3]/g;

console.log(notNums.match(notNsRe));


let specialNums = "1!2@3#4$5%678910";
let specialNsRe = /[^0-9]/g;

console.log(specialNums.match(specialNsRe));


let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRegEx = /Os[5-9]Os/g;

console.log(practice.match(practiceRegEx));
