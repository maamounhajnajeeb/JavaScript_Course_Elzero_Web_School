let friends = [
    "Ahmed", "Sayed", "Eman", 
    "Mahmoud", "Ameer", "Osama", "Sameh"
];

let letter = "a";
let index = 1;

for (let i=0; i<friends.length; i++) {
    let name = friends[i];
    if (name[0] === letter.toUpperCase()){
        continue;
    } 
    else {
        console.log(`${index} => ${friends[i]}`);
        index++
    }
}