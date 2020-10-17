const express = require('express');
const {
  getUsers,
  createUser,
  login,
  updateUser,
} = require('../controllers/userController');

const userRouters = express.Router()


userRouters.get('/',getUsers)
userRouters.post('/',createUser)
userRouters.put('/:id',updateUser)
userRouters.post('/login',login)




module.exports = userRouters;