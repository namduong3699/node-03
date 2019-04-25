const mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
	id: {
		type: String
	},
	title: {
		type: String
	},
	completed: {
		type: Boolean,
		default: false
	},
	created: {
		type: String,
		default: new Date().toISOString().replace("T", " ")
	}
});

module.exports = mongoose.model('Todo', todoSchema);

