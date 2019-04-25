const Todo = require('../models/todo.model.js');

exports.hello = (req, res) => {
	res.send('Hello, world!');
};

exports.create = (req, res) => {
	//Check request
	if(!req.body.title) {
		return res.status(400).send({
			message: "Todo content can not be empty"
		});
	}

	//Create Todo
	const todo = new Todo({
		title: req.body.title || 'Untitle Todo'
	});

	//Save todo to database
	todo.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Error'
			});
		});
};

exports.findAll = (req, res) => {
	Todo.find()
		.then(todos => {
			res.send(todos);
		}).catch(err => {
			res.status(500).send({
				message: err.message || 'Error'
			});
		});
};

exports.findOne = (req, res) => {
	Todo.findById(req.params.id)
		.then(todo => {
			if (!todo) {
				return res.status(404).send({
					message: 'Todo not found with id ' + req.params.id
				});
			}
			res.send(todo);
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res.status(404).send({
					message: 'Todo not found with id ' + req.params.id
				});
			}
			return res.status(500).send({
				message: 'Error get todo with id ' + req.params.id
			});
		});
};

exports.update = (req, res) => {
	// Validate Request
	if (!req.body.title) {
		return res.status(400).send({
			message: "Todo content can not be empty"
		});
	}

	// Find todo and update it with the request body
	Todo.findByIdAndUpdate(req.params.id, {
			title: req.body.title || "Untitled Todo"
		}, {
			new: true
		})
		.then(todo => {
			if (!todo) {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.id
				});
			}
			res.send(todo);
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.id
				});
			}
			return res.status(500).send({
				message: "Error updating todo with id " + req.params.id
			});
		});
};

exports.delete = (req, res) => {
	Todo.findByIdAndRemove(req.params.id)
		.then(todo => {
			if (!todo) {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.id
				});
			}
			res.send({
				message: "Todo deleted successfully!"
			});
		}).catch(err => {
			if (err.kind === 'ObjectId' || err.name === 'NotFound') {
				return res.status(404).send({
					message: "Todo not found with id " + req.params.id
				});
			}
			return res.status(500).send({
				message: "Could not delete todo with id " + req.params.id
			});
		});
};