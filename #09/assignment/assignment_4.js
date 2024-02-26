let website = "Go";
let words = [
    `${website}ogle`, "Facebook", 
    ["Elzero", "Web", "School"]
];

let Elzero = words.pop()[0] 
index = Elzero.indexOf("z");

console.log(Elzero.slice(index).toUpperCase());
