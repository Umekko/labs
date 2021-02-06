// let stack = [];
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// stack.push(3);
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.reverse());

// console.log(arr);

// console.log(arr.join(' ')); //

// console.log(arr);

// let arr = [1, 2, 3];

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);

const print = (obj) => JSON.stringify(obj, null, 2);

let salaries = [1000, 500, 200, 300, 400];

let updatedSalaries = salaries.filter(function(salary) {
    return salary > 400;
});

console.log(updatedSalaries);

// salaries.forEach(function(value) {
//     console.log(value + 200);
// });

// let updatedSalaries = salaries.map(function(salary) {
//     return salary + 100;
// });



console.log('Старые зарплаты: ' + salaries);
console.log('Новые зарплаты: ' + print(updatedSalaries));

// let updatedSalaries = salaries.map(function(value) {
//     return value
// });

