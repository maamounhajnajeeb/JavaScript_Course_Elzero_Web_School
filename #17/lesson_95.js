let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.length);
console.log(element.classList.contains("one"));
console.log(element.classList.contains("three"));
console.log(element.classList.item(1));

element.onclick = () => {
    element.classList.add("add-one", "add-two");
    element.classList.remove("one", "two");
}
