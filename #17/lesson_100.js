// let myP = document.querySelector("p");

// myP.onclick = function () {
//     console.log("Message From OnClick");
// };


// you need to comment upove

// let myP = document.querySelector("p");

// function one() {
//     console.log("Message from onclik 1")
// }

// function two() {
//     console.log("Message from onclik 2")
// }

// window.onload = "Osama";

// myP.addEventListener("click", () => {
//     console.log("from addEventListener");
// });

// myP.addEventListener("click", two);

// myP.addEventListener("click", "two"); // error


// you have to comment previous code
let myP = document.querySelector("p");

myP.addEventListener("click", () => {
    let myPClone = myP.cloneNode(true);
    // myPClone.setAttribute("class", "new-p");
    myPClone.className = "new-p";
    // myPClone.onclick = () => {
    //     console.log("This is cloned element");
    // };
    document.body.appendChild(myPClone);
})


document.addEventListener("click", (e) => {
    if (e.target.className === "new-p"){
        console.log("Cloned Paragraph");
    }
})