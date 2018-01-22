const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const app = express();
const keys = require('./config/keys');
const nodemailer = require('nodemailer');
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const cors = require('cors');
app.use(express.static(path.join(__dirname, 'build')));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Email
app.post('/contact', (req, res) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: keys.email,
			pass: keys.pass
		}
	});
	const mailOptions = {
		from: 'contact.haave@gmail.com',
		to: 'sky.jacobson231@gmail.com',
		subject: 'Contact Page',
		html: `<p>Name: ${req.body.name}</p>
					<p>Company: ${req.body.company}</p>
					<p>Email: ${req.body.email}</p>
					<p>Phone: ${req.body.phone}</p>
					<p>Message: ${req.body.message}</p>`
	};
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			console.log(info);
			res.sendStatus(200);
		}
	});
});

/* ===================== SQL ===================== */
app.get('/db', (req, res) => {
	const config = {
		userName: keys.sqlUser,
		password: keys.sqlPass,
		server: 'haavedbserver.database.windows.net',
		options: {
			database: 'haavedb',
			encrypt: true
		}
	};
	const connection = new Connection(config);
	// Attempt to connect and execute queries if connection goes through
	connection.on('connect', function(err) {
		if (err) {
			console.log(err);
		} else {
			queryDatabase();
		}
	});
	function queryDatabase() {
		let output = [];
		// Read all rows from table
		request = new Request('SELECT * FROM dbo.Articles', function(
			err,
			rowCount,
			rows
		) {
			console.log(output);
			res.send(output);
			// process.exit();
		});

		request.on('row', function(columns) {
			columns.forEach(function(column) {
				const val = String(column.value);
				if (
					val.indexOf('uploaded a file: <') > -1 &&
					val.indexOf('Article Title:') > -1 &&
					val.indexOf('Article URL:') > -1 &&
					val.indexOf('Publication Date:') > -1
				) {
					output.push(parseSlackText(val));
				}
			});
		});
		connection.execSql(request);
	}
});
/* ============= End SQL =========== */
/* =========== Parse Slack Text ========= */
function parseSlackText(strRaw) {
	var strImg = strRaw.split('uploaded a file: <')[1];
	strImg = strImg.split('> and commented:')[0];
	strImg = strImg.split('|')[0];

	var strTitle = strRaw.split('Article Title:')[1];
	strTitle = strTitle.split('Article URL:')[0];
	strTitle = strTitle.trim();

	var strURL = strRaw.split('Article URL: <')[1];
	strURL = strURL.split('> Publication Date:')[0];

	var strDate = strRaw.split('Publication Date:')[1];
	strDate = strDate.trim();

	var strResult = `{
    "title": "${strTitle}",
    "img": "${strImg}",
    "url": "${strURL}",
    "pubDate": "${strDate}"
  }`;

	return JSON.parse(strResult);
}
/* ============== End Parse =========== */

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Send all other requests to the React App
// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	res.setHeader(
// 		'Access-Control-Allow-Methods',
// 		'POST, GET, PATCH, DELETE, OPTIONS'
// 	);
// 	next();
// });

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
