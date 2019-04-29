const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require('./config/database.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.mongoUrl, {
	useNewUrlParser: true
}).then(() => {
	console.log('Successfully connected to the database');
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

// let config = require('./config/config.json');

// let port = process.env.PORT || config.PORT;
// let host = process.env.HOST || config.HOST;

let config = require("config")

let port = process.env.PORT || config.get("PORT")
let host = process.env.HOST || config.get("HOST")

app.listen(port, host, function(err) {
	if (!err) console.log('Server is listening on port ' + port);
	else console.log('Loi cmnr!');
});
require('./routes/todo.route.js')(app);