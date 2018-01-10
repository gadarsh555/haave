const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const keys = require('./config/keys');
const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');
app.use(express.static(path.join(__dirname, 'build')));

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'contact.haave@gmail.com',
		pass: 'testPassword!'
	}
});
const mailOptions = {
	from: 'contact.haave@gmail.com',
	to: 'sky.jacobson231@gmail.com',
	subject: 'Node contact request',
	html: '<p>hello world</p>'
};
transporter.sendMail(mailOptions, (err, info) => {
	if (err) {
		console.log(err);
	} else {
		console.log(info);
	}
});
// Email
// app.post('/contact', (req, res) => {
// let transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		type: 'OAuth2',
// 		user: 'contact.haave@gmail.com',
// 		clientID: keys.googleClientID,
// 		clientSecret: keys.googleClientSecret,
// 		refreshToken: keys.googleRefreshToken,
// 		accessToken: keys.googleAccessToken
// 	}
// });
// let mailOptions = {
// 	from: 'Client <contact.haave@gmail.com>',
// 	to: 'Nora <contact.haave@gmail.com>',
// 	subject: 'Sending Email using Node.js',
// 	text: 'That was easy!'
// };
// transporter.sendMail(mailOptions, function(err, info) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Email sent: ' + info.response);
// 	}
// });
// })
// End Email

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
