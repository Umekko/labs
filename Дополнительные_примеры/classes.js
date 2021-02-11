class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed = speed;
		console.log(`${this.name} бежит со скоростью ${this.speed}`);
	}
	stop() {
		this.speed = 0;
		console.log(`${this.name} стоит`);
	}
}
// Прошло 100500 лет
class Homosapiens extends Animal {
	whoAmI() {
		console.log(`Привет меня зовут: ${this.name}`);
	}
}

const homosapines = new Homosapiens('Андрей');

homosapines.run(500);
homosapines.stop();
homosapines.whoAmI();

// class User {
//     constructor(name) {
//       this.name = name;
//     }
//     getName() {
//         console.log(this.name);
//         return this.name;
//     }
//     changeName(newName) {
//         this.name = newName;
//     }
// }

// const admin = new User('John');
// admin.changeName('Petr');
// admin.getName();


function Machine() {
	this.powered = false;

	this.on = function() {
		this.powered = true;
		console.log('Машина включена');
	}
	this.off = function() {
		this.powered = false;
		console.log('Машина выключена');
	}
}

function CoffeeMachine(model) {
	Machine.call(this);
	CoffeeMachine.prototype = Machine.prototype;
	
	this.model = model;
	this.getModel = function() {
		console.log(this.model);
		return this.model;
	}
};

const coffeeMachine = new CoffeeMachine('mark2');

coffeeMachine.getModel();
coffeeMachine.on();
coffeeMachine.off();

console.log(coffeeMachine.__proto__);
