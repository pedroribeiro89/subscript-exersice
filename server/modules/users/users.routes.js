const controller = require("./user.controllers");

function configUsersRoutes(app) {
    app.post('/users', controller.postUser);
    app.get('/users/:id', controller.getUser);
}

module.exports = configUsersRoutes