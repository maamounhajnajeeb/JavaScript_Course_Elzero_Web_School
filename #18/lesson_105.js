// setInterval(function () {
//     console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//     console.log(`Iam Message`);
// }


let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "-1") {
        clearInterval(counter);
    }
}

let counter = setInterval(countdown, 1000);