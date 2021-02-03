// function test(param1 = 10, param2 = 'stroka') {
//     console.log(param1, param2);
// }

// let fn = function(param1, param2) {
//     console.log(param1, param2)
// }

// fn('1', '2');

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(2, 5);

// console.log(result);
function displayResults(num) {
    return num * 2;
};
function loadFiles(cb) {
    let result = cb(5);
    console.log(result);
};
loadFiles(displayResults);