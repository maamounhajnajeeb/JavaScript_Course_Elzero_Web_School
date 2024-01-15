let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
console.log(myElement.innerHTML);

myElement.textContent = "Text From <span>Main.js</span> File";
console.log(myElement.textContent);

document.images[0].src = "https://google.com";
document.images[0].alt = "alternate";
document.images[0].title = "picture";
document.images[0].id = "pic";
document.images[0].className = "image";

let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://facebook.com");
console.log(myLink.getAttribute("href"));
