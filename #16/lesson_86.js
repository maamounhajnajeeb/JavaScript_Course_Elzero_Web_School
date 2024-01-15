let myIdElement = document.getElementById("my-div");

console.log(myIdElement);

let myTagElements = document.getElementsByTagName("p");

console.log(myTagElements);
console.log(myTagElements[1]);

myTagElements[1].innerHTML = "Test";

let myClassElements = document.getElementsByClassName("my-span");
console.log(myClassElements);

let myQueryElement = document.querySelector(".special");
console.log(myQueryElement);

let myDivQueryElement = document.querySelector("#my-div");
console.log(myDivQueryElement);

let mySpanQueryElement = document.querySelector(".my-span");
console.log(mySpanQueryElement);

let mySpansQueryElement = document.querySelectorAll(".my-span");
console.log(mySpansQueryElement);

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);