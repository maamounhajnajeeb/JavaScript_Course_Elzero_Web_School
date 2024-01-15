let divElement = document.getElementsByClassName("our-element")[0];
let pElement = divElement.nextElementSibling;
pElement.remove();

let divStart = document.createElement("div");
divStart.setAttribute("data-value", "Start");
divStart.setAttribute("title", "Start Element");
divStart.className = "start";
divStart.innerText = "start";

let divEnd = document.createElement("div");
divEnd.setAttribute("data-value", "End");
divEnd.setAttribute("title", "End Element");
divEnd.className = "end";
divEnd.innerText = "end";


divElement.before(divStart);
divElement.after(divEnd);