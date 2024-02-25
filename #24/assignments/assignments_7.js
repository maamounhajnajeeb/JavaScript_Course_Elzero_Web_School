function* genNumbers() {
    yield* [1, 2, 2, 2, 4];
}

function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* combineGenerators() {
    yield* genNumbers();
    yield* genLetters();
}

let gen = combineGenerators(); 
let initialGeneratorItem = gen.next(), pre = null;

while (!initialGeneratorItem.done) {
    if (initialGeneratorItem.value !== pre){
        console.log(initialGeneratorItem);
    }
    pre = initialGeneratorItem.value;
    initialGeneratorItem = gen.next();
}
