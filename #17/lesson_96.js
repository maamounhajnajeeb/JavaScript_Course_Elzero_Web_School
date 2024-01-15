let element = document.getElementById("my-div");

element.style.color = "blue";
element.style.backgroundColor = "black";
element.style.fontWeight = "bold";

// this will override above
element.style.cssText = "font-size: 3em; color: green;";

element.style.removeProperty("color");
element.style.setProperty("font-weight", "bolder", "important");

// rules is depcrepted