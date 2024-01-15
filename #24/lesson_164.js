/*
Generators
    Generators functions run its code when required
    Generators functions return special object [generator object]
    Generators are iterable
*/

function* generatorNumbers() {
    for (let i=0; i<4; i++) {
        yield i;
        console.log(`aler after yield ${i}`)
    }
}

let generator = generatorNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next().done);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next());

for (let value of generator) {
    console.log(value);
} // done

for (let value of generatorNumbers()) {
    console.log(value);
}
