// setTimeout(() => {
//     console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//     console.log("Iam Message");
// }

// setTimeout(sayMsg, 3000, "Maamoun");

// function sayMsg(user) {
//     console.log(`Iam Message for ${user}`);
// }

let counter = setTimeout(sayMsg, 3000, "Maamoun");

function sayMsg(user) {
    console.log(`Iam Message for ${user}`);
}

let button = document.querySelector("button");
button.onclick = () => {
    clearTimeout(counter);
}