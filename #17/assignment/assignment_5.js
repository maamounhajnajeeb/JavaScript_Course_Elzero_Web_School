let bodyElements = document.body.children;

for (let i=0; i<bodyElements.length; i++) {
    if (bodyElements[i].nodeName !== "SCRIPT") {
        bodyElements[i].onclick = () => {
            console.log(`This is ${bodyElements[i].nodeName}`);
        };
    }
}
