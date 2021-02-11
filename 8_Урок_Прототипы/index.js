// function Machine() {
// 	this.powered = false;
// 	this.on = function () {
// 		this.powered = true;
// 		console.log('Машина включена');
// 	};
// 	this.off = function () {
// 		this.powered = false;
// 		console.log('Машина выключена');
// 	};
// }

// Machine.prototype.power = function() { 
//     console.log('Включил');
// };
// Machine.prototype.off = function() { 
//     console.log('Выключил');
// };

// // Наследование
// function CoffeeMachine(model) {
//     //this = {}
// 	Machine.call(this);
// 	this.model = model;
// 	this.getModel = function () {
// 		console.log(this.model);
// 		// return this.model;
// 	};

//     this.getModelV2 = () => {
//         console.log(this.model);
//         console.log(that);
//         // return this.model;
//     }
// }

// const coffeeMachine = new CoffeeMachine('mark3');
// // console.log(coffeeMachine);
// // coffeeMachine.getModel();
// // coffeeMachine.getModelV2();

// const getModel = coffeeMachine.getModelV2;
// getModel();

// // CoffeeMachine.prototype = Machine.prototype;

// // const coffeeMachine = new CoffeeMachine('mark2');
// // coffeeMachine.power();

// // coffeeMachine.on();
// // coffeeMachine.getModel();

// // sum()

// // function sum(firstNum, secondNum) {
// //     return firstNum + secondNum; 
// // }

// // const sum = (firstNum, secondNum) => firstNum + secondNum;

// // let result = sum(2, 5);
// // console.log(result);

// const test = b => b + 2;