// routes.js
module.exports = (app) => {
    const todoList = require('../controllers/controller.js');

    app.route('/tasks')
        .get(todoList.listTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.readTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);
};