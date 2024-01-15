// most important lesson

let myElement = document.createElement("div");

let myAttribute = document.createAttribute("data-custom");

let myText = document.createTextNode("product one");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "Testing");

// append text to element
myElement.appendChild(myText);

// create comment
let myComment = document.createComment("This is Div");

// append comment to element
myElement.appendChild(myComment);

// append element to body
document.body.appendChild(myElement);


console.log(myElement);
