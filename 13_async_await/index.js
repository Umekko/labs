// console.log(1);

// setTimeout(() => {
//     console.log('set timeout code');
// }, 20);

// console.log(2);

// console.log(3);

// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             resolve(`Завершился спустя ${ms}`) 
//         }, ms)
//     });
// };

// console.log(1);
// delay(3000)
//     .then((message) => console.log(message));
// setTimeout(() => {
//     console.log('set timeout callback');
// }, 1000);
// console.log(2);

const promise = new Promise((resolve, reject) => {
    resolve('Error 404, page not found');
});

async function load() {
    try {
        console.log(1);
        const result = await promise;
        console.log('Получил ответ от сервера:', result);
        console.log(2);
        return result;
    } catch (e) {
        console.log('Ошибка загрузки', e);
    }
}

console.log('inside 1');
load()
    .then(v => console.log('async функция закончилась, v'))
console.log('inside 2');

