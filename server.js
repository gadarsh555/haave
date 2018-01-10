const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const keys = require('./config/keys');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
	return res.send('pong');
});

// Email
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
		type: 'OAuth2',
		user: 'contact.haave@gmail.com',
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		refreshToken: keys.googleRefreshToken,
		accessToken: keys.googleAccessToken
  }
});

var mailOptions = {
  from: 'Sky <sky.jacobson231@gmail.com>',
  to: 'Nora <contact.haave@gmail.com>',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
// End Email

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
