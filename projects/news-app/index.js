const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

const { router } = require('./routes/api');

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 8181; // 3000-8666

const db_url =
	'mongodb+srv://dean:555437din@cluster0.8hznh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function start() {
	try {
		await mongoose.connect(db_url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		});

		app.listen(PORT, () => {
			console.log(`Приложение запущено на ${PORT} порту`);
		});
	} catch (e) {
		console.log('Ошибка запуска приложения: ', e.message);
		process.exit(1);
	}
}

start();
