const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require("./config/database.js");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.mongoUrl, {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, function(err) {
	if (!err) console.log('Server is listening on port ' + port);
	else console.log('Loi cmnr!');
});
require('./routes/todo.route.js')(app);