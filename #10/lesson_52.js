let products = [
    "Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone",
]

for (let i=0; i<products.length; i++) {
    console.log(products[i]);
}

let j = 0;
for (; j<products.length; j++) {
    console.log(products[j]);
}

let k = 0;
for (; k<products.length;) {
    console.log(products[k]);
    k++;
}

let y = 0;
for(;;) {
    console.log(products[y]);
    y++;
    if (y === products.length) {
        break
    }
}

let z = 0;
for(;;) {
    console.log(products[z]);
    z++;
    if (z === products.length) break;
}
