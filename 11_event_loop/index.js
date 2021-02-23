// function test() {
//     console.log(1);
// }
// function test1() {
//     test();
// }
// function test2() {
//     test1();
// }

// test2();

// Обещания
// const freeCodeCampPromise = new Promise(
//     function (resolve, reject) {
//         resolve('Я сделал домашку!!');
//     }
// );

// console.log(1);
// setTimeout(() => {
//     console.log('Timeout' + 2);
// });
// freeCodeCampPromise
//     .then((v) => {
//         console.log(v);
//     })

// console.log(2);

const loadFiles = function(fileCount) {
    return new Promise((resolve, reject) => {
        const FILE_LIMIT = 500;
        let currentLimit = 0;
        for (let i = 0; i < fileCount; i++) {
            currentLimit = currentLimit + 15;
            if (currentLimit > FILE_LIMIT) {
                reject('Привышен лимит, загрузка отменена')
            }
        } 
        resolve('Загрузил все файлы');
    });
}

loadFiles(5)
    .then(successMessage => {
        return {
            fileCount: 5,
            message: successMessage
        };
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });
// console.log('Синхроныый код');

// loadFiles
//     .then(v => console.log('Then', v))
//     .catch(v => console.log('Catch', v))
//     .finally(() => {
//         console.log("Выполнюсь в любом случае")
//     })

// console.log('Какая другая синхронная операция');
