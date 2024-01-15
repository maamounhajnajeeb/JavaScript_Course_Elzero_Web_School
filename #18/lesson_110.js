// console.log(window.scrollX === window.pageXOffset);

let button = document.querySelector("button");

window.onscroll = () => {
    if (window.scrollY >= 600) {
        button.style.display = "block";
    } else if (window.scrollY < 600) {
        button.style.display = "none";
    }
}

button.onclick = () => {
    window.scrollTo(0, 0);
}