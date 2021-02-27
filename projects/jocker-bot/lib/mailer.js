const nodemailer = require('nodemailer');

const message = `
    Привет это nodejs
`;

const mailForMailing = 'neolabs.mailer@gmail.com';
const passwordForMail = 'Ctujlyzctynz,hm';

const transport = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	port: 25,
	auth: {
		user: mailForMailing,
		pass: passwordForMail,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

console.log('Отправляю письмо');

transport
	.sendMail({
		from: mailForMailing,
		to: 'dino.zavr1412@gmail.com',
		text: message,
		subject: 'Тестовое письмо',
	})
	.then(() => {
		console.log('Успешно выслал письмо');
	})
	.catch((e) => {
		console.log('error', e.message);
	});

console.log('Синхронная операция');
