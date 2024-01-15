window.onload = () => {
    
    storage = window.localStorage
    
    for (let i=0; i<storage.length; i++) {
        let ID = storage.key(i);
        let value = storage[ID];
        createElement(ID, value);
    }
}


let btn = document.getElementsByClassName("add")[0];

btn.addEventListener("click", (e) => {
    let inputField = document.getElementsByClassName("input")[0];
    if (inputField.value.length) {
        add(inputField.value);
    }
});

function add(value) {
    storage = window.localStorage
    ID = randomID();
    storage.setItem(ID, value);
    createElement(ID, value);
}

function randomID() {
    let randomString = "";
    for (let i=0; i<4; i++){
        randomString += `${Math.floor(9*Math.random())}`;
    }
    return randomString;
}

function createElement(ID, value) {
    let parentDiv = document.getElementsByClassName("tasks")[0];
    
    let newBtn = document.createElement("button");
    newBtn.innerText = "delete";
    newBtn.addEventListener("click", (e) => {
        deleteElement(ID, parentDiv);
    });
    
    let newDiv = document.createElement("dvi");
    newDiv.innerText = value;
    newDiv.style.display = "block";
    newDiv.setAttribute("id", ID);
    
    
    newDiv.appendChild(newBtn);
    parentDiv.appendChild(newDiv);
}

function deleteElement(id, parent) {
    
    window.localStorage.removeItem(id);
    
    let element = document.getElementById(id);
    parent.removeChild(element);
}