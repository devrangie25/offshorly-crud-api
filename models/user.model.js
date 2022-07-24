const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequilize');
const bcrypt = require("bcrypt");

const User = sequelize.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: { isEmail: true },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hash = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hash);
        },
    },
    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
    }
}, {
    timestamps: true
});

module.exports = User;
