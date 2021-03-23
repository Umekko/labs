const express = require('express');
const router = express.Router();

const { getNews, createNews, getOneNews, deleteNews, updateNews } = require('../controllers/news');

router.get('/news', getNews);
router.get('/news/:newsId', getOneNews); // params id -> :newsId
router.post('/create-news', createNews);
// Удаление одной новости
router.delete('/news/:newsId', deleteNews);
// Обновление одной новости
router.post('/news/:newsId', updateNews);

exports.router = router;
