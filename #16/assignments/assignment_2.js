function changingAttrs(src, alt) {
    let imgElement = document.images[0];
    imgElement.setAttribute("src", src);
    imgElement.setAttribute("alt", alt);

    let bodyElement = document.body;

    for (let i=0; i<10; i++) {
        let divElement = document.createElement("div");
        let clonedImage = imgElement.cloneNode(false);

        divElement.appendChild(clonedImage);

        bodyElement.appendChild(divElement);
    }

    return "after loop";
}

console.log(
    changingAttrs(
        "https://elzero.org/wp-content/themes/elzero/imgs/logo.png", "Elzero Logo"
        ));
