function*  generatNumbers() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

gen = generatNumbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

