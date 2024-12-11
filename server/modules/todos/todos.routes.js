const controller = require("./todos.controllers");

function configTodosRoutes(app) {
    app.get('/', controller.getAllTodos);
    app.get('/:id', controller.getTodo);

    app.post('/', controller.postTodo);
    app.patch('/:id', controller.patchTodo);

    app.delete('/', controller.deleteAllTodos);
    app.delete('/:id', controller.deleteTodo);
}

module.exports = configTodosRoutes