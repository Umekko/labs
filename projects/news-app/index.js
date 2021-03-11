const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 8181; // 3000-8666

const DATABASE_NEWS = [
	{
		title: '11 апреля будут выборы',
		content: 'С Ж пояснил за конституцию',
		date: new Date(),
		lang: 'ru',
	},
	{
		title: '11 aprelya budut vibory',
		content: 'Sadyr Sadyr !!!',
		date: new Date(),
		lang: 'en',
	},
];

app.get('/news', async (request, response) => {
	try {
		const lang = request.headers.language; // ru

		const fiteredNews = DATABASE_NEWS.filter((n) => {
			return n.lang === lang;
		});

		response.status(200).json(fiteredNews);
	} catch (e) {
		response.status(500).json(e.message);
	}
});

app.post('/create-news', async (req, res) => {
	try {
        const news = req.body;
        news.date = new Date();

        DATABASE_NEWS.push(news);

        res.status(201).json({
            message: 'Новость создана',
            allNews: DATABASE_NEWS
        });
	} catch (e) {

    }
});

app.listen(PORT, () => {
	console.log(`Приложение запущено на ${PORT} порту`);
});
