function createCart(times) {

    for (let i=0; i<times; i++) {
        let myDivElement = document.createElement("div");
        // myDivElement.className = "product";
        myDivElement.setAttribute("class", "product");

        let myH3Element = document.createElement("h3");
        let myH3Text = document.createTextNode(`Product Header ${i}`);
        myH3Element.appendChild(myH3Text);

        let myPElement = document.createElement("p");
        let myPText = document.createTextNode("Product Paragraph");
        myPElement.appendChild(myPText);

        myDivElement.appendChild(myH3Element);
        myDivElement.appendChild(myPElement);

        document.body.appendChild(myDivElement);
    }
}

createCart(2);