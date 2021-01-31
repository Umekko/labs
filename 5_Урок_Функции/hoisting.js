// let a = 1;

// function fn() {
//     console.log(2)
// }

// fn();

// 1) Заходим в приложение
// 2) Выходим из приложения
// 3) Когда оформляем покупку

// function logout() {
//     const message = createMessage('logout');
//     console.log(message);
// }

// logout();

// function login() {
//     const message = createMessage('login');
//  }
// function checkout() {
//     const message = createMessage('checkout');
// }

// function createMessage(action) {
//     let message = ``;
//     if (action === 'logout') {
//         message = "Вы точно хотите выйти"
//     } else if (action === 'login') {
//         message = "Добро пожаловать"
//     } else if (action === 'checkout') {
//         message = "Покупка #225. "
//     }
//     return message;
// }

// user {
//  name: '',
//  grantLvl: 10
//  isAdmin: true
//}
//
// canAccess(user) => true : false
//

const employe = {
	grantLvl: 0,
	isAdmin: false,
};
const operator = {
	isAdmin: true,
	grantLvl: 5,
};
const admin = {
	isAdmin: true,
	grantLvl: 10,
};

// delete, update, move

//

function canAccess(user) {
	if (user.isAdmin === true && user.grantLvl > 7) {
		return true;
	} else {
		return false;
	}
}

function deleteDocs() {
	if (canAccess(operator)) {
		console.log('Delete doc');
	} else {
		console.log('Нет доступа');
	}
}
deleteDocs();

function updateDocs() {
	if (canAccess(admin)) {
		console.log('Еть доступ');
	} else {
		console.log('Нет доступа');
	}
}
updateDocs();

function moveDocs() {
	if (canAccess(employe)) {
		console.log('Есть доступ');
	} else {
		console.log('Нет доступа');
	}
}moveDocs()

// function deleteDocuments() {
//     if (canAccess(admin)) {
//         console.log('Успешно удалено')
//     } else {
//         console.log('Отказано в доступе')
//     }
// }
// deleteDocuments();
