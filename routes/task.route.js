const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');
const validator = require('../middleware/ajv.validation')
const taskSchema = require('../schema/task.schema');

router.post('/create', validator(taskSchema), controller.insertTask);
router.get('/', controller.getTasks);
router.get('/:id', controller.getTask);
router.post('/update', validator(taskSchema), controller.updateTask);
router.post('/delete', controller.deleteTask);

module.exports = router;