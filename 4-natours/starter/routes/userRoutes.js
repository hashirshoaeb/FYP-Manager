const express = require('express');
const userRouter = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'NOT DEFINED YET'
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'NOT DEFINED YET'
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'NOT DEFINED YET'
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'NOT DEFINED YET'
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'NOT DEFINED YET'
  });
};

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);

userRouter
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = userRouter;
