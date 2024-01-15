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
    }
    else if (divElement.innerText == "5") {
        window.open("https://www.elzero.org", "", "width:500; height:500;");
    }
}
let counter = setInterval(countDown, 1000);
