// let arr = [2, 2, 2, 5, 5, 5];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     console.log("индекс: " + i, " Значение: " + arr[i]);
// }

// console.log(sum);

// let users = [{name: 'Dean'}, {name: 'Andrew'}];

// for (let user of users) {
//     console.log(user.name);
// }

// Объекты
// let obj = {
//     age: 22
// }; // Литерный стиль
// let obj1 = new Object({
//     age: 35
// }); // Стиль конструктора
// console.log(obj.age);
// console.log(obj1.age);
// this - Контекс, указывает на {}
// let user = {
//     age: 25,
//     name: 'Andrew',
//     getAge: function() {
//         console.log('Возраст: ' + this.age);
//     }
// };
// user.getAge();

// let car = {
//     speed: 500,
//     wheels: 4,
//     color: 'red'
// }
// for (let key in car) {
//     console.log(`Ключ: ${key}, значение ${car[key]}`);
// }

// Примитивы

// let a = 1;
// let b = a;

// console.log(a);
// console.log(b);
// b = 2;
// console.log(a);
// console.log(b);

// Объекты, копируются по ссылке
// let obj = { a: 1, b: 2 };

// let obj2 = obj;

// console.log(obj);
// console.log(obj2);

// obj2.c = 3;

// console.log(obj);
// console.log(obj2);

// let user = {
//     age: 25,
//     name: 'Andrew',
//     getAge: function() {
//         console.log('Возраст: ' + this.age);
//     }
// };
// let fn = user.getAge;

// fn();

// user.getAge();