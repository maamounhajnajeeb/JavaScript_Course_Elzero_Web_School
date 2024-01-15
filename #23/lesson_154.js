class User {
	
	// private property
	#e;
	constructor(id, username, eSalary) {
		this.id = id;
		this.username = username;
		this.#e = eSalary;
	}
	
	getSalary() {
		return parseInt(this.#e);
	}
}

let userOne = new User(101, "Elzero", 5000);

console.log(userOne.username);

console.log(userOne.getSalary());
