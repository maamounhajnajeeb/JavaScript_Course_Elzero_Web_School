// navbar section
function creatHeader() {
    let header = document.createElement("header");

    let logo = document.createElement("h2");
    logo.innerText = "Elzero";

    let ul = document.createElement("ul");

    header.append(logo, ul)

    let ulTextList = ["Home", "About", "Service", "Contact"];

    for (let i=0; i<ulTextList.length; i++) {
        let li = document.createElement("li");
        li.innerText = ulTextList[i];
        ul.appendChild(li);
    }

    document.body.append(header);
}
creatHeader();

function styleHeader() {
    let logo = document.querySelector("header");
    logo.style.cssText = "display: flex; justify-content:space-between; margin: 1% 2.5%; align-items:center;";

    let h2Tag = document.querySelector("h2");
    h2Tag.style.cssText = "color: green; font-family:sans-serif";

    let ul = document.querySelector("ul");
    ul.style.cssText = "display:flex; justify-content:center; list-style-type:none;"

    let li = document.querySelectorAll("li");
    for (let i=0; i<li.length; i++) {
        element = li[i];
        element.style.cssText = "margin: 0 3%;";
    }
}
styleHeader();

// products section
function createProducts() {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main-div");
    mainDiv.style.backgroundColor = "#eee";

    for (let i=1; i<=15; i++) {
        let product = document.createElement("div");
        product.innerText = i;
        product.style.cssText = "background-color: white;";

        let productSpan = document.createElement("span");
        productSpan.innerText = "Product";

        product.appendChild(productSpan);
        mainDiv.appendChild(product);
    }

    document.body.appendChild(mainDiv);
}
createProducts();

function styleProducts() {
    let mainDiv = document.querySelector(".main-div");
    mainDiv.style.cssText = "display:grid; grid-template-columns: repeat(3, minmax(auto, 1fr));\
        background-color: #eee; padding: 0.5%; margin: 1% 1% 0% 1%;";

    let products = document.querySelectorAll(".main-div div");
    for (i=0; i<products.length; i++) {
        let product = products[i];
        product.style.cssText = "margin: 1.5%; background-color: white; text-align: center; \
        display: flex; justify-content: center; flex-direction: column; padding: 2%; font-size: 2em;";
        let productSpan = product.children[0];
        productSpan.style.cssText = "margin: 2%; font-size: 0.5em;";
    }
}
styleProducts();

// footer section
function createFooter() {
    let footer = document.createElement("div");
    footer.innerText = "Copyright 2023";
    footer.style.cssText = "background-color: #31bb31; color: white; text-align: center;\
                            padding: 1.5%; margin: 0 1%;";

    let mainBody = document.body;
    mainBody.appendChild(footer);
}
createFooter();
