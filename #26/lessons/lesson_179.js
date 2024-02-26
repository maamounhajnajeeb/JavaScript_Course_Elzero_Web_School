/*
    what is callback
        a function that is passed intor another one as an argument to be executed later
*/

function makeItRed(e) {
    e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);


function iAmACallback() {
    console.log("Iam a callback function");
}
setTimeout(iAmACallback, 2000);


setTimeout(() => {
    console.log("Download photo from url");
    setTimeout(() => {
        console.log("Resize photo");
        setTimeout(() => {
            console.log("Add logo");
            setTimeout(() => {
                console.log("Show photo on the website");
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
