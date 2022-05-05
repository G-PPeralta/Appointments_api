const express = require('express');
const { UserController } = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.listUsers);
userRouter.get('/:id', UserController.findUser);
userRouter.put('/:id', UserController.editUser);
userRouter.delete('/:id', UserController.deleteUser);

module.exports = userRouter;
