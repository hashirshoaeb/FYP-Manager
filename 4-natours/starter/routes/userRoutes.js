const express = require('express');
const c = require(`${__dirname}/../controllers/userController.js`);
const userRouter = express.Router();

userRouter
  .route('/')
  .get(c.getAllUsers)
  .post(c.createUser);

userRouter
  .route('/:id')
  .get(c.getUser)
  .patch(c.updateUser)
  .delete(c.deleteUser);

module.exports = userRouter;
