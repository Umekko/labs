// Observer - наблюдатель, поведенчиский
function hanFunction(homeWork) {
	console.log('han: ', homeWork);
}
function aidarFunction(homeWork) {
	console.log('Айдар', homeWork);
}
function chikaFunction(homeWork) {
	console.log('Чика', homeWork);
}

function Magazie() {
	// {}
	this.subscribers = {};

	this.subscribe = function (event, handler) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = [];
		}
		this.subscribers[event].push(handler);
	};

	//subscribers.snik = []
	//subscribers.snik.push(getSnikers)
	this.unsubscribe = function (event, handler) {
		this.subscribers[event] = this.subscribers[event].filter(
			(cb) => cb !== handler,
		);
	};
	//snik, data: Сникерс v1
	//subscribers.snik[getSnikers]
	this.notify = function (event, data) {
		if (!this.subscribers[event]) {
			console.log(`Событие ${event} не существует`);
			return;
		}
		this.subscribers[event].forEach((handler) => {
			handler(data);
		});
	};
}
const magazine = new Magazie();

magazine.subscribe('test_2', hanFunction);
magazine.subscribe('test_2', chikaFunction);
magazine.subscribe('test_2', aidarFunction);
console.log(magazine);

magazine.notify('test_2', {
    text: 'Изучать паттерны',
    link: 'https://refactoring.guru/ru/design-patterns/what-is-pattern'
});
// magazine.subscribe('snik', getSnickers);

// magazine.notify('snik', 'snikers v1')
// magazine.notify('snik', 'snikers v2')

// setTimeout(() => {
//     magazine.notify('snik', 'snikers after 1 second')
// }, 1000);

// magazine.unsubscribe('snik', getSnickers);
