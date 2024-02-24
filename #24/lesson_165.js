function* generatorNums() {
	yield 1;
	yield 2;
	yield 3;
}

function* generatorLetters() {
	yield "A";
	yield "B";
	yield "C";
}

function* generatorAll() {
	yield* generatorNums();
	yield* generatorLetters();
	yield* [4, 5, 6];
}

let generator = generatorAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// .return() will stopped the yeilding even if the generator has values
console.log(generator.return("Stopped !!"));
console.log(generator.next());
console.log(generator.next());
