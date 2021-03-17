const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

const { router } = require('./routes/api');

app.use(bodyParser.json());
app.use(router);

const PORT = 8181; // 3000-8666

async function start() {
	try {
		await mongoose
			.connect(process.env.db_url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			})
			.then(() => console.log('Подключился к базе данных'));

		app.listen(PORT, () => {
			console.log(`Приложение запущено на ${PORT} порту`);
		});
	} catch (e) {
		console.log('Ошибка при запуске: ', e.message);
		process.exit(1);
	}
}

start();
