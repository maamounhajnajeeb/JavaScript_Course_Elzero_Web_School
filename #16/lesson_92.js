/* events */
let myBtn = document.getElementById("btn");

myBtn.onclick = function() {
    console.log("Clicked");
}

myBtn.oncontextmenu = function() {
    console.log("Clicked");
}

myBtn.onmouseenter = function() {
    console.log("Clicked");
}

myBtn.onmouseleave = function() {
    console.log("Clicked");
}

window.onscroll = function() {
    console.log("Scroling");
}

window.onresize = function() {
    console.log("Resizing");
}

let myForm = document.getElementById("form");
myForm.onfocus = function () {
    console.log("focusing");
}

myForm.onblur = function () {
    console.log("bluring");
}
