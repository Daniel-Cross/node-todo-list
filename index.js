const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express'),
	app = express();

dotenv.config();

const todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
	res.send('HELLO FROM THE ROOT');
});

app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.DATABASE_URL, () => {
	console.log('connected to the database');
	app.listen(8080, () => {
		console.log('server listening on port 8080');
	});
});
