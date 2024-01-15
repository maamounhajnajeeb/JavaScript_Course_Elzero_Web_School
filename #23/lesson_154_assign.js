class User{
	
	#eSalary
	
	constructor(id, username, eSalary) {
		this.id = id;
		this.username = username;
		this.#eSalary = eSalary
	}
	
	#getSalary() {
		return parseInt(this.#eSalary)
	};
	
	getSalary() {
		return this.#getSalary();
	};
	
}

user = new User(101, "Maamoun", 5000);

console.log(user.getSalary());


class Admin extends User{
	constructor(id, username, eSalary, ability) {
		super(id, username, eSalary);
		this.ability = ability;
	}
}

admin = new Admin(1, "Admin", "5000", "adminstration");
console.log(admin.getSalary());

// you need to see the class prototype in the browser console