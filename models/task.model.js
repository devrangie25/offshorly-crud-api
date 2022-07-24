const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequilize');

const Task = sequelize.define('tasks', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    user_id: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Task
