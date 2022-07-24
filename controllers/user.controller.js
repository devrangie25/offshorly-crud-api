const User = require('../models/user.model');
const { Op } = require('sequelize');
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            message: 'Users fetched successfully',
            error: false,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const login = async (req, res) => {
    try {
        const { email } = req.body
        const isUserExisted = await User.findOne({
            where: { email: email }
        })

        if (isUserExisted) {
            const password_valid = await bcrypt.compare(req.body.password, isUserExisted.password);
            if (password_valid) {
                res.status(200).json({
                    message: 'Login successfully',
                    error: false,
                    data: isUserExisted
                });
            } else {
                res.status(400).json({
                    message: 'Password is incorrect',
                    error: true
                });
            }
        } else {
            res.status(400).json({
                message: 'User not found',
                error: true
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: { email: email }
        })

        if (user === null || user === undefined) {
            return false
        }
        return true

    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id);
        res.status(200).json({
            message: 'User fetched successfully',
            error: false,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const insertUser = async (req, res) => {
    try {
        console.log('insertUser');
        const { email, password } = req.body

        const isUserExisted = await findUserByEmail(email)

        if (isUserExisted) {
            res.status(400).json({
                message: 'User already existed',
                error: true
            })
        } else {
            const newUser = await User.create({
                email: email,
                password: password
            })

            res.status(200).json({
                message: 'User created successfully',
                error: false,
                data: newUser
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const { email, password, id } = req.body
        const user = await User.update({
            email: email,
            password: password
        }, {
            where: { id: id }
        });

        res.status(200).json({
            message: 'User updated successfully',
            error: false,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

const deactivateUser = async (req, res) => {
    try {
        const { active, id, email } = req.body
        const user = await User.update({
            active: active
        }, {
            where: {
                [Op.and]: [
                    { id: id },
                    { email: email }
                ]
            }
        });

        res.status(200).json({
            message: 'User deactivated successfully',
            error: false,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deactivateUser,
    login
}