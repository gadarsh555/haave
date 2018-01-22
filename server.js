const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const app = express();
const keys = require('./config/keys');
const nodemailer = require('nodemailer');
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
app.use(express.static(path.join(__dirname, 'build')));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
			console.log(rowCount + ' row(s) returned');
			res.send(output);
			// process.exit();
		});

		request.on('row', function(columns) {
			columns.forEach(function(column) {
				console.log(column);
				if (column.metadata.colName === 'SlackText') {
					output.push({ value: column.value });
				}
			});
		});
		connection.execSql(request);
	}
});
/* ============= End SQL =========== */

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Send all other requests to the React App
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'POST, GET, PATCH, DELETE, OPTIONS'
	);
	next();
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
