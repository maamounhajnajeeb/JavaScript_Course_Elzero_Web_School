//// filter example
let sentence = "I Love Foood Code Too Playing Much";

let filteredSentence = sentence.split(" ");
filteredSentence = filteredSentence.filter(el => {
    return el.length <= 4;
})
filteredSentence = filteredSentence.join(" ");
console.log(filteredSentence);


//// map example
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers.split("");
ign = ign.map((el) => {
    return isNaN(parseInt(el)) ? el : "";
})
ign = ign.join("");
console.log(ign);


//// turning into filter
let ignoredNumbers = "Elz123er4o";

let ignd = ignoreNumbers.split("");
ignd = ignd.filter((el) => {
    return isNaN(parseInt(el));
})
ignd = ignd.join("");
console.log(ignd);


//// another example
let mix = "A13BS2ZX";
mix = mix.split("");
mix = mix.filter((el) => {
    return el == +el;
})
mix = mix.map(el => {
    return +el * +el;
})
console.log(mix.join(""));