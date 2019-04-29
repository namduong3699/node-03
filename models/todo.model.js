const mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Todo', todoSchema);