const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.getUsers = async (req, res, next) => {
 try {
   const user = await User.find()
   res.json({success:true , user})
 } catch (error) {
   
 }
};

exports.createUser = async (req, res, next) => {
  try {
    
    const user =  new User(req.body)
    await user.save()
      const token = await user.generateAuthToken();
    
    if (!user) {
      return next(new errorResponse('Something went wrong', 400));
    }


    res.send({ success: true, user, token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.credentials(req.body.email, req.body.password);
    const  token = await user.generateAuthToken()
  
    res.send({success:true, user, token});
  } catch (error) {
    next(error);
  }
};
exports.updateUser = async (req, res, next) => {
  const  updates = Object.keys(req.body)
  try {
    const user = await User.findById(req.params.id);
    updates.forEach(update => user[update] = req.body[update])
await user.save()
    res.send({ success: 'success', user, });
  } catch (error) {
    next(error);
  }
};
