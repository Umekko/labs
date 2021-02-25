const { startBot } = require('./lib/bot');

(async function () {
    console.log('Начинается запуск приложения');
    try {
        await startBot();
    } catch(err) {
        console.log('Ошибка при запуске приложения', err);
    }
})();
