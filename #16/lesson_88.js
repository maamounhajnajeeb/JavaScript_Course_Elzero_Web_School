console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    }
    else {
        myP.setAttribute("data-src", "New Value");
    }
} else {
    console.log("Not Found");
}

if (myP.hasAttributes()) {
    console.log("has attributes");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("div Has Attributes");
} else {
    console.log("div has no attributes");
}
