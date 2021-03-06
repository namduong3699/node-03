module.exports = (app) => {
    const todo = require('../controllers/todo.controller.js');

    app.get('/', todo.hello);

    app.post('/todos', todo.create);

    app.get('/todos/:id', todo.findOne);

    app.post('/todos/:id', todo.update);

    app.post('/todos/:id/toogle', (req, res) => {
        res.send('meow');
    });

    app.delete('/todos/:id', todo.delete);
}