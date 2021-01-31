// function sayHello() {
//     let name = 'Dean';
//     console.log('hello ' + name);
// }

// sayHello();

// function showMessage(name, age) {
//     console.log(`Hello ${name} age is: ${age}`)
// }
// showMessage('Elgis', 10);

// function showMessage(name = 'User') {
//     console.log(`Hello: ${name}`);
// }
// showMessage('Elgis');

// function calculate(num1, num2, operator) {
//     if (operator === '+') {
//         return num1 + num2;
//     } else if (operator === '/') {
//         return num1 / num2;
//     } else if (operator === '*') {
//         return num1 * num2;
//     } else if (operator === '-') {
//         return num1 * num2;
//     } else {
//         return "Любые другие операторы не поддерживаются";
//     }
// }
// let result = calculate(4, 2, '*');
// console.log(result);

// function doSomething() {
//     let isAdmin = true;
    
//     if (isAdmin) {
//         console.log("ADmin!")
//         return;
//     }
// }
// doSomething();

// Локальная область видимости
// function createMessage() {
//    let message = `
//         address: ${getUserInfo().address}
//         name: ${getUserInfo().name}
//    `;

//    return message;

//     function getUserInfo() {
//         return {
//             address: 'Zagorskay 42',
//             name: 'Sasha'
//         }
//     }
// }

// let message = createMessage();

// console.log(message);

// let, const 
// for (let i = 10; i < 20; i++) {
    // console.log(i);
// }

// console.log(i);

// function makeSandwich() {
//     let withOil = true;

//     if (withOil) {
//         let b = 20;
//     }

//     console.log(b);
// }
// makeSandwich();


// let fn = function() {
//     console.log(1);
// }

// let sum = (a, b) => {return a + b};

// console.log(sum(1, 2));
