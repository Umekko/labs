const nodemailer = require('nodemailer');

const message = `
    Привет это nodejs
`;

const transport = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	port: 25,
	auth: {
		user: 'dino.zavr1412',
		pass: 'password',
	},
	tls: {
		rejectUnauthorized: false,
	},
});

transport
	.sendMail({
		from: 'dino.zavr1412@gmail.com',
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
