const { News } = require('../models/news');

exports.getNews = async (req, res) => {
	try {
        const allNews = await News.find();
        
		res.status(200).json(allNews);
	} catch (e) {
		res.status(500).json(e.message);
	}
}

exports.getOneNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.newsId);
        
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
        const createdNews = await News.create(news);
        
        res.status(201).json({
            message: 'Новость создана',
            news: createdNews
        });
	} catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

exports.deleteNews = async (req, res) => {}
exports.updateNews = async (req, res) => {}