function changeAlt(imagesElements) {
    for (let i=0; i<imagesElements.length; i++) {
        if (imagesElements[i].alt === "") {
            imagesElements[i].setAttribute("alt", "Elzero new");
        } else {
            imagesElements[i].setAttribute("alt", "Old");
        }
    }
}

changeAlt(
    document.images
);