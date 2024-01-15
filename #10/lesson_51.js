let products = [
    "Keyboard", "Mouse", "Pen", "Pad", "Monitior",
];

let colors = [
    "Red", "Green", "Blue",
];

for (let i = 0; i < products.length; i++) {
    if (products[i] == "Pad"){
        break
    }
    console.log(products[i]);
}

for (let i = 0; i < products.length; i++) {
    if (products[i] == "Pad"){
        continue
    } else {
    console.log(products[i]);
    }
}


mainLoop: for (let i=0; i<products.length; i++) {
    console.log(products[i]);

    nestedLoop: for (let j=0; j<colors.length; j++) {
        console.log(`- ${colors[j]}`);

        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}
