// try {
//     console.log('1 шаг');
//     console.log('2 шаг');
    
//     jsjqeqeqkkls; // действие 1
//     console.log('3 шаг');
// } catch {
//     console.log('Сообщение об ошибке: ');
// } finally {
//     console.log('По любому выполнюсь!!');
// }
// console.log('4 шаг');

// && , ||, !
// console.log(!true);
// console.log(!false);
// falsy - '', null, undefined, 0, NaN
// true - {} [], function() 'dsadsadas', 123123

// const user = {
//     isAdmin: false
// };

// function exceptionGenerator() {
//     if (!user.isAdmin) {
//         throw 'Пользователь не является админом';
//     }
//     console.log('Код дальше работать не будет')
// }

// try {
//     console.log('Идет авторизация...');
//     console.log('Получен пользователь..', user);
//     exceptionGenerator();
//     console.log('Другое действие...');
// } catch (e) {
//     console.log('Поймал исключение: ', e);
// }
// console.log('Код дальше работает');

// function test() {
//     throw {
//         message: 'Нет интернет соединения..',
//         code: 502
//     }
// }

// test();

// console.log(1);

// try {
//     console.log('действие 1');
//     test();
//     console.log('действие 2');
// } catch (e) {
//     console.log(e.message);
//     console.log(e.code);
// }

// function subSubMain() {
//     try {
//         throw new Error('404, страница не найдена');
//     } catch(e) {
//         console.log('Ошибка в функции subSubMain: ', e.message);
//         throw e;
//     }
// }
// function subMain() {
//     try {
//         subSubMain();
//     } catch(e) {
//         console.log('Ошибка в функции subMain', e.message);
//         throw e;
//     }
// }
// function main() {
//     try {
//         subMain();
//     } catch (e) {
//         console.log('Ошибка в функции main', e.message);
//     }
// }
// console.log('Запуск приложения...');
// main();
// console.log('Приложени запущено...');
