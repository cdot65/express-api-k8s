// controller.js
const mongoose = require('mongoose');
const task = mongoose.model('Tasks');

exports.listTasks = (req, res) => {
    task.find({}, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.createTask = (req, res) => {
    const new_task = new task(req.body);
    new_task.save((err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.readTask = (req, res) => {
    task.findById(req.params.taskId, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.updateTask = (req, res) => {
    task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.deleteTask = (req, res) => {
    task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if (err)
            res.send(err);
        res.json({ message: 'Task deleted' });
    });
};
