const { DATABASE_NEWS } = require('../database/db');

exports.getNews = async (request, response) => {
	try {
		const lang = request.headers.language; // ru

		const fiteredNews = DATABASE_NEWS.filter((n) => {
			return n.lang === lang;
		});

		response.status(200).json(fiteredNews);
	} catch (e) {
		response.status(500).json(e.message);
	}
}

exports.getOneNews = async (req, res) => {
    try {
        const news = DATABASE_NEWS.find(news => news.id === req.params.newsId);
        
        if (!news) {
            return res.status(404).json('Новость не найдена')
        }

        return res.status(200).json(news);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Сервер упал');
    }
}

exports.createNews = async (req, res) => {
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
}