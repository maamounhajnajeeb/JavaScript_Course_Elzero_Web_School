// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div");

// myDiv.appendChild(myP);


// comment the appove first
// let myP = document.querySelector("p").cloneNode();
// let myDiv = document.querySelector("div");

// myDiv.appendChild(myP);


// comment the appove first
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-cloned`;
myDiv.appendChild(myP);