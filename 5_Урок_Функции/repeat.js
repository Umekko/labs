// Вычисляющение функции
// function sum(num1 = 0, num2 = 0) {
//     console.log('Num 1: ', num1);
//     console.log('Num 2: ', num2);
//     return num1 + num2;
// }

// let result = sum(5);

// console.log(result);

// Функции проверки
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     return false;
// }

// if (isAdult(5)) {
//     console.log('Welcome')
// } else {
//     console.log('Bye')
// }

// Получающие функции

// function getMaxNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;
// }

// let max = getMaxNumber(5, 2);
// console.log(max);
let arr = [1, 2, 3];

function CarFactory(name, speed, color) {
    this.name = name;
    this.speed = speed;
    this.color = color;
    this.getSpeed = function() {
        console.log(this.speed);
    }
    this.setSpeed = function(newSpeed) {
        this.speed = newSpeed;
    }
}
const ferari = new CarFactory('l240', 300, 'red');
console.log(ferari);

ferari.setSpeed(500);
console.log(ferari);
