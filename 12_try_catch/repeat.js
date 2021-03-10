console.log('Начало скрипта');

try {
	console.log('Действие 1');
	throw 'Падение скрипта!!';
} catch (error) {
	console.log('Ошибка: ', error);
}

function request() {
	try {
		console.log('Отправляю запрос на сервер...');
		throw {
			message: 'Привышен таймаут запроса',
			code: 500,
		};
	} catch (e) {
        console.log('Внутренний блок catch', e);
        throw e;
	} finally {
		console.log('block finnaly');
	}
}

try {
    request();
} catch (e) {
    console.log('Внешний catch поймал ошибку', e);
}

console.log('Конец скрипта');
