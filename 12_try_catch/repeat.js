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
		console.log('Ошибка', e);
	} finally {
		console.log('block finnaly');
	}
}

request();

console.log('Конец скрипта');
