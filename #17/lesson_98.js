let spanTwo = document.querySelector(".two");

console.log(spanTwo.nextSibling);

console.log(spanTwo.nextElementSibling);

console.log(spanTwo.parentElement);

spanTwo.onclick = function() {
    spanTwo.parentElement.style.opacity = "0.1";
}