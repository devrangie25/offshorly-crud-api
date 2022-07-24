const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const validator = require('../middleware/ajv.validation')
const userSchema = require('../schema/user.schema');

router.post('/create', validator(userSchema), controller.insertUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/update', validator(userSchema), controller.updateUser);
router.post('/deactivate', controller.deactivateUser);
router.post('/login', validator(userSchema) ,controller.login);

module.exports = router;