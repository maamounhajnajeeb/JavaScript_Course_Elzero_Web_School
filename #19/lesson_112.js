let liElements = document.querySelectorAll("li");

let realColor = document.querySelector(".real-color");


liElements.forEach((element) => {
    element.addEventListener("click", (e) => {
        window.localStorage.setItem(
            "realColor", element.getAttribute("data-color")
            );
        getRealColor();
    });
})

function getRealColor() {
    realColor.style.backgroundColor = window.localStorage.getItem("realColor");
}
getRealColor();
