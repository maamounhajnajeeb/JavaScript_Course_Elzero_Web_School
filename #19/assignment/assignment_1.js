let fontFamily = document.getElementById("font-family");
let color = document.getElementById("color");
let fontSize = document.getElementById("font-size");

let styles = [fontFamily, color, fontSize];

styles.forEach((element) => {
    element.onchange = (e) => {
        setValue(element.id, element.value);
        setAttribute(element.id, element.value);
        setStyle(element.id, element.value);
    }
});

function setValue(elementID, value) {
    let storage = window.localStorage;
    storage.setItem(elementID, value);
}

function setAttribute(elementID, value) {
    let element = document.getElementById(elementID);
    childs = element.children;
    for (let i=0; i<childs.length; i++) {
        if (childs[i].hasAttribute("selected")) {
            childs[i].removeAttribute("selected");
        }
        if (childs[i].value === value) {
            childs[i].setAttribute("selected", "");
        }
    }
}

function setStyle(styleAttribute, value) {
    let paraghraph = document.querySelector("p");
    paraghraph.style[styleAttribute] = value;
    console.log(paraghraph.style)
}


function getValues() {
    let storage = window.localStorage;
    for (let i=0; i<storage.length; i++) {
        let elementID = storage.key(i);
        let value = storage[elementID];
        setAttribute(elementID, value);
        setStyle(elementID, value);
    }
}
getValues();