function popUp() {
    let div = document.createElement("div");
    div.style = "position: relative; top: -40px;"
    div.style.textAlign = "center";
    div.style.backgroundColor = "#eee";
    div.style.width = "20%";
    div.style.marginLeft = "38%";
    let h3 = document.createElement("h3");
    h3.innerText = "Welcome";
    let p = document.createElement("p");
    p.innerText = "Welcome to Elzero Web School";
    let button = document.createElement("button");
    button.style = "background-color: red; color: white; \
    position: relative; top: -87px; left: 127px;"
    
    
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    
    document.body.appendChild(div);
    
    button.onclick = () => {
        div.style.display = "none";
    }
}

setTimeout(() => { popUp() }, 5000);
