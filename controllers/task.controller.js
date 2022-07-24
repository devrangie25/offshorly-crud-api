const Task = require('../models/task.model');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({
            message: 'Tasks fetched successfully',
            error: false,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByPk(id)
        res.status(200).json({
            message: 'Task fetched successfully',
            error: false,
            data: task
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const insertTask = async (req, res) => {
    try {
        const { title, type, date, user_id } = req.body
        const newTask = await Task.create({
            title: title,
            type: type,
            user_id: user_id, 
            date: date
        })

        res.status(200).json({
            message: 'Task created successfully',
            error: false,
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const { title, type, date, completed, id } = req.body
        const updatedTask = await Task.update(
            {
                title: title,
                type: type,
                date: date,
                completed: completed
            }, 
            {
                where: {
                    id: id
                }
        })

        res.status(200).json({
            message: 'Task updated successfully',
            error: false,
            data: updatedTask
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.body
        const deletedTask = await Task.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json({
            message: 'Task deleted successfully',
            error: false,
            data: deletedTask
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

module.exports = {
    getTasks,
    getTask,
    deleteTask,
    updateTask,
    insertTask
}