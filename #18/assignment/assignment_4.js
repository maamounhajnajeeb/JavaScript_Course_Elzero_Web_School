function makeDiv() {
    let div = document.createElement("div");
    div.innerText = 10;
    div.style.backgroundColor = "#eee";
    div.style.color = "black";

    document.body.appendChild(div);

    return div;
}
let divElement = makeDiv();

function countDown() {
    divElement.innerText -= 1;
    if (divElement.innerText == "0") {
        clearInterval(counter);
        window.open("https://www.elzero.org", "", "");
    }
}
let counter = setInterval(countDown, 1000);
