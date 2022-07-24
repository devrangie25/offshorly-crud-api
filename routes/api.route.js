const express = require('express');
const router = express.Router();

const taskRoutes = require('./task.route');
const userRoutes = require('./user.route');

router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;

