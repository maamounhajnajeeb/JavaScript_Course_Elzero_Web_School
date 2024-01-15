function multiply(...elements) {
    let result = 1;
    for (let i=0; i<elements.length; i++) {
        if (typeof elements[i] !== "string") {
            result *= Math.trunc(elements[i]);
            }
        }
    console.log(result);
    }

multiply(10, 20);
multiply("A", 10, 30);
multiply(100.5, 10, "B");
