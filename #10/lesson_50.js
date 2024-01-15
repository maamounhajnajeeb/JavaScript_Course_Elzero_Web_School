let products = [
    "Keyboard", "Mouse", "Pen", "Pad", "Monitior",
];

let colors = [
    "Red", "Green", "Blue",
];

let models = [
    2020, 2021, 
];

for (let i=0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));

    console.log("# colors #");
    for (let j = 0; j < colors.length; j++) {
        
        console.log(colors[j]);
    }

    console.log("# models #");
    for (let k = 0; k < models.length; k++) {
        console.log(models[k]);
    }
}
