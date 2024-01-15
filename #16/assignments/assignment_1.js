let myElement = document.querySelector(".element");
myElement = document.querySelector("div");
myElement = document.querySelector("#elzero");
myElement = document.querySelector("[name='js']");
myElement = document.querySelectorAll("div")[0];
myElement = document.querySelectorAll("#elzero")[0];
myElement = document.querySelectorAll(".element")[0];
myElement = document.querySelectorAll("[name='js']")[0];
myElement = document.body.children[1];
myElement = document.body.childNodes[3];
myElement = document.body.firstElementChild.nextElementSibling;
myElement = document.body.lastElementChild.previousElementSibling;
myElement = document.body.getElementsByTagName("div")[0];
myElement = document.body.getElementsByClassName("element")[0];
myElement = document.getElementById("elzero");
myElement = document.getElementsByName("js")[0];

console.log(myElement);