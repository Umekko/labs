function Car(name, speed, color) {
	this.name = name;
	this.wheels = 4;
	this.speed = speed;
	this.color = color;

	this.isPowered = false;

	this.getCarInfo = function () {
		let carInfo = `
            Название машины: ${this.name}
            Количество колес: ${this.wheels}
            Цвет: ${this.color}
            Скорость: ${this.speed}
        `;
		console.log(carInfo);
		return carInfo;
	};

	this.setName = function (newName) {
		this.name = newName;
	};

	this.run = function () {
		if (this.isPowered) {
			console.log('Машина уже включена!!!');
		} else {
			console.log('Включаю машину.....');
			this.isPowered = true;
		}
	};
	this.stop = function () {
		if (this.isPowered === false) {
			console.log('Машина уже остановлена!!');
		} else {
			this.isPowered = false;
			console.log('Выключаю машину....');
		}
	};
}

const car1 = new Car('Bentley', 400, 'red');
car1.run();
console.log(car1.isPowered);
car1.run();
console.log(car1.isPowered);
car1.stop();
console.log(car1.isPowered);
car1.run();
car1.stop();
