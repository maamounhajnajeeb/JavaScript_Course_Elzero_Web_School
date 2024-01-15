function deleteOldElements(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }

    return element;
}

function appendingChilds(elementsNumber, elementsContent, elementsType, oldElement) {

    for (let i=0; i<elementsNumber; i++) {
        let newElement = document.createElement(elementsType);
        newElement.className = "box";
        newElement.title = "Element";
        newElement.id = `id-${i+1}`;
        newElement.innerText = elementsContent;
        newElement.style.backgroundColor = "orange";
        newElement.style.margin = "0.5%";
        newElement.style.padding = "5%";
        oldElement.appendChild(newElement);
    }
}

function creation() {
    let elementsNumber = document.querySelector("[name='elements']").value;
    let elementsContent = document.querySelector("[name='texts']").value;
    let elementsType = document.querySelector("[name='type']").value;

    elementsType === "Div"? elementsType = "div": elementsType = "section";

    // deleting old elements
    let oldElement = deleteOldElements(document.getElementsByClassName("results")[0]);

    // appending new elements
    appendingChilds(
        elementsNumber, elementsContent, elementsType, oldElement
        )
    
    // some styling
    oldElement.style.display = "flex";
    oldElement.style.flexWrap = "wrap";

}

let form = document.forms[0];

form.onsubmit = function(e) {
    e.preventDefault();
    creation()
};
