const express = require('express');

const app = express();

const PORT = 5000;

const news = [
    {
        title: 'В кр прошли выборы',
        content: 'бджывдждвыфждвыфж дыдвждвыфждвыфждвжыфд',
        date: new Date(),
    }
];

// endpoint /heroes 
// GET -> [{ name: 'Captain america' }]

app.get('/heroes', async (req, res) => {
    
})

app.get('/news', async (req, res) => {
    try {
        res.status(200).json({
            message: 'Новости за последние 12 часов',
            news: news
        })
    } catch (e){
        console.log(e);
    }
});

app.listen(PORT, () => {
    console.log('Backend запущен!! на порту: ' + PORT);
});