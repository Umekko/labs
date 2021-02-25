const { Telegraf } = require('telegraf');
const token = 'f602796699:AAEIdUHolDTEIKYb5uxiyqXtuN8W4Xgc_VU';
const bot = new Telegraf(token);
const jokes = ['Шутка 1', 'Шутка 2', 'Шутка 3'];

exports.startBot = async function () {
    try {
        bot.command('giveJoke', (ctx) => {
            const jokeIndex = Math.floor(Math.random() * jokes.length);
            const joke = jokes[jokeIndex];
            ctx.reply(joke);
        });
        
        await bot.launch();
        console.log('Бот успешно запущен!!');
    } catch (err) {
        console.log('Ошибка при запуске бота', err);
    }
}
