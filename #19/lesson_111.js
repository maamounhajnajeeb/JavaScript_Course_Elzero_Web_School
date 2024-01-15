// set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage.fontSize = "20px";

// get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.fontWeight);
console.log(window.localStorage["fontSize"]);

document.body.style.backgroundColor = window.localStorage.getItem("color");

// remove one key
window.localStorage.removeItem("color");

// remove all
//window.localStorage.clear();

// get key
console.log(window.localStorage.key(1));

console.log(window.localStorage);
console.log(typeof window.localStorage);