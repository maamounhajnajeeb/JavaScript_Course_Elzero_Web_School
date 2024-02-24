// first idea //

// function* generatorNums() {
// 	yield 1;
// 	yield 2;
// 	return "A";
// 	yield 3;
// 	yield 3;
// }

// let generator = generatorNums();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// second idea //
function*  generatNumbers() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

let generator = generatNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
