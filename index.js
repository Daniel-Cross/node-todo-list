const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express'),
	app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
	res.send('index.html');
});

app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });

app.listen(process.env.PORT || 8080, () => {
	console.log('Node Todo List api is running on http://localhost:8080');
});
