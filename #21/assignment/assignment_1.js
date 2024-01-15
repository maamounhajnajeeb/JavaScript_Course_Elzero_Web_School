let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

let last = 0;
setOfNumbers.forEach( e => last = e);
console.log(last);
