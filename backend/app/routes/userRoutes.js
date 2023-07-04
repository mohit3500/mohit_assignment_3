
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
