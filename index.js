const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express'),
	app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
	res.send('HELLO FROM THE ROOT');
});

app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.DATABASE_URL, function() {
	console.log('connected to the database');
	app.listen(8080, () => {
		console.log('server listening on port 8080');
	});
});
