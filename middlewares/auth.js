const jwt = require('jsonwebtoken');
const errorResponse = require('../utils/errorResponse');
require('dotenv').config();

exports.Auth = async (req, res, next) => {
     try {
          let token = req.headers.authorization
          if (!token) {
               throw new errorResponse('invalid token',401)
          }
          token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.userData = decoded
          next()
     } catch (error) {
          next(error)
     }
} 


