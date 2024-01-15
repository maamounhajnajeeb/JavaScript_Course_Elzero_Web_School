let element = document.getElementById("my-div");

let createdP = document.createElement("p");

element.before("Hello From JS");

element.after(createdP);

element.append("Hello in the append");
element.prepend("Hello in the prepend");

element.remove();